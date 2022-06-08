// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
let dummyId = 0;

function sortNoop() {
  return 0;
}

function sortLinks(a, b) {
  return !!a.isUnreachable !== !!b.isUnreachable ? a.isUnreachable ? 1 : -1 : 0;
}

function expandLinked(input) {
  const valueRelay = input.map(({
    value
  }) => value);
  return input.reduce((result, entry) => {
    result.push(entry);
    return entry.linked ? result.concat(expandLinked(entry.linked).map(child => {
      child.genesisHashRelay = entry.genesisHash;
      child.isChild = true;
      child.valueRelay = valueRelay;
      return child;
    })) : result;
  }, []);
}

function expandEndpoint(t, {
  dnslink,
  genesisHash,
  homepage,
  info,
  isChild,
  isDisabled,
  isUnreachable,
  linked,
  paraId,
  providers,
  teleport,
  text
}, firstOnly, withSort) {
  const hasProviders = Object.keys(providers).length !== 0;
  const base = {
    genesisHash,
    homepage,
    info,
    isChild,
    isDisabled,
    isUnreachable: isUnreachable || !hasProviders,
    paraId,
    teleport,
    text
  };
  const result = Object.entries(hasProviders ? providers : {
    Placeholder: `wss://${++dummyId}`
  }).filter((_, index) => !firstOnly || index === 0).map(([host, value], index) => ({ ...base,
    dnslink: index === 0 ? dnslink : undefined,
    isLightClient: value.startsWith('light://'),
    isRelay: false,
    textBy: value.startsWith('light://') ? t('lightclient.experimental', 'light client (experimental)', {
      ns: 'apps-config'
    }) : t('rpc.hosted.via', 'via {{host}}', {
      ns: 'apps-config',
      replace: {
        host
      }
    }),
    value
  }));

  if (linked) {
    const last = result[result.length - 1];
    const options = [];
    linked.sort(withSort ? sortLinks : sortNoop).filter(({
      paraId
    }) => paraId).forEach(o => options.push(...expandEndpoint(t, o, firstOnly, withSort)));
    last.isRelay = true;
    last.linked = options;
  }

  return expandLinked(result);
}

export function expandEndpoints(t, input, firstOnly, withSort) {
  return input.sort(withSort ? sortLinks : sortNoop).reduce((all, e) => all.concat(expandEndpoint(t, e, firstOnly, withSort)), []);
}