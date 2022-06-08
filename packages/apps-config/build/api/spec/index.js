// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0
import acala from "./acala.js";
import ajuna from "./ajuna.js";
import altair from "./altair.js";
import apron from "./apron.js";
import aresGladios from "./ares-gladios.js";
import aresParachain from "./ares-parachain.js";
import astar from "./astar.js";
import automata from "./automata.js";
import bajun from "./bajun.js";
import basilisk from "./basilisk.js";
import beresheet from "./beresheet.js";
import bifrost from "./bifrost.js";
import bifrostAsgard from "./bifrost-asgard.js";
import bifrostParachain from "./bifrost-parachain.js";
import bitcountry from "./bitcountry.js";
import bitcountryPioneer from "./bitcountry-pioneer.js";
import bitcountryParachain from "./bitcountry-rococo.js";
import centrifuge from "./centrifuge.js";
import centrifugeChain from "./centrifuge-chain.js";
import chainx from "./chainx.js";
import clover from "./clover.js";
import cloverRococo from "./clover-rococo.js";
import coinversation from "./coinversation.js";
import competitorsClub from "./competitors-club.js";
import contracts from "./contracts.js";
import crab from "./crab.js";
import crownSterlingChain from "./crown-sterling.js";
import crust from "./crust.js";
import testPara from "./cumulus-test-parachain.js";
import darwinia from "./darwinia.js";
import datahighwayParachain from "./datahighway.js";
import dockMainnet from "./dock-mainnet.js";
import dockTestnet from "./dock-testnet.js";
import dotmog from "./dotmog.js";
import eave from "./eave.js";
import edgeware from "./edgeware.js";
import encointerNodeNotee from "./encointer-node-notee.js";
import encointerNodeTeeproxy from "./encointer-node-teeproxy.js";
import encointerPara from "./encointer-para.js";
import equilibrium from "./equilibrium.js";
import fantour from "./fantour.js";
import galital from "./galital.js";
import galitalParachain from "./galital-parachain.js";
import galois from "./galois.js";
import gamepower from "./gamepower.js";
import genshiro from "./genshiro.js";
import hanonycash from "./hanonycash.js";
import hydrate from "./hydrate.js";
import idavoll from "./idavoll.js";
import imbue from "./imbue.js";
import integritee from "./integritee.js";
import interbtc from "./interbtc.js";
import ipse from "./ipse.js";
import joystream from "./joystream.js";
import jupiter from "./jupiter.js";
import jupiterRococo from "./jupiter-rococo.js";
import khala from "./khala.js";
import kilt from "./kilt.js";
import konomi from "./konomi.js";
import kpron from "./kpron.js";
import kulupu from "./kulupu.js";
import kusari from "./kusari.js";
import kylin from "./kylin.js";
import laminar from "./laminar.js";
import litentry from "./litentry.js";
import mangata from "./mangata.js";
import manta from "./manta.js";
import mathchain from "./mathchain.js";
import moonbeam from "./moonbeam.js";
import mybank from "./mybank.js";
import neatcoin from "./neatcoin.js";
import nftmart from "./nftmart.js";
import nodle from "./nodle.js";
import opal from "./opal.js";
import opportunity from "./opportunity.js";
import origintrail from "./origintrail.js";
import pangolin from "./pangolin.js";
import pangoro from "./pangoro.js";
import parallel from "./parallel.js";
import parami from "./parami.js";
import phoenix from "./phoenix.js";
import pichiu from "./pichiu.js";
import plasm from "./plasm.js";
import polkadex from "./polkadex.js";
import polkafoundry from "./polkafoundry.js";
import polymesh from "./polymesh.js";
import pontem from "./pontem.js";
import prism from "./prism.js";
import quartz from "./quartz.js";
import realis from "./realis.js";
import riochain from "./riochain.js";
import robonomics from "./robonomics.js";
import shibuya from "./shibuya.js";
import shiden from "./shiden.js";
import snowbridge from "./snowbridge.js";
import soraSubstrate from "./soraSubstrate.js";
import spanner from "./spanner.js";
import stafi from "./stafi.js";
import standard from "./standard.js";
import subdao from "./subdao.js";
import subgame from "./subgame.js";
import subsocial from "./subsocial.js";
import subspace from "./subspace.js";
import substrateContractsNode from "./substrateContractsNode.js";
import swapdex from "./swapdex.js";
import t0rn from "./t0rn.js";
import ternoa from "./ternoa.js";
import trustbase from "./trustbase.js";
import turing from "./turing.js";
import uart from "./uart.js";
import unique from "./unique.js";
import unitv from "./unitv.js";
import vln from "./vln.js";
import vlnrococo from "./vln-rococo.js";
import vodka from "./vodka.js";
import web3games from "./web3games.js";
import westlake from "./westlake.js";
import zCloak from "./zCloak.js";
import zeitgeist from "./zeitgeist.js";
import zenlink from "./zenlink.js";
import zero from "./zero.js"; // NOTE: The mapping is done from specName in state.getRuntimeVersion

const spec = {
  Crab: crab,
  Darwinia: darwinia,
  'Darwinia Crab PC2': pangolin,
  'Darwinia PC2': pangolin,
  Equilibrium: equilibrium,
  Genshiro: genshiro,
  'Genshiro Rococo Testnet': genshiro,
  Pangolin: pangolin,
  Pangoro: pangoro,
  VLN: vln,
  'VLN-PC': vlnrococo,
  ...acala,
  ajuna,
  altair,
  apron,
  'ares-gladios': aresGladios,
  'ares-mars': aresParachain,
  'ares-odyssey': aresParachain,
  asgard: bifrostAsgard,
  astar,
  automata,
  bajun,
  basilisk,
  beresheet,
  bifrost,
  'bifrost-parachain': bifrostParachain,
  'bitcountry-node': bitcountry,
  'bitcountry-parachain': bitcountryParachain,
  centrifuge,
  'centrifuge-chain': centrifugeChain,
  chainx,
  'chainx-parachain': chainx,
  clover,
  'clover-rococo': cloverRococo,
  coinversation,
  'competitors-club': competitorsClub,
  contextfree: automata,
  contracts,
  'crown-sterling': crownSterlingChain,
  crust,
  'crust-parachain': crust,
  'cumulus-test-parachain': testPara,
  datahighway: westlake,
  'datahighway-parachain': datahighwayParachain,
  dawn: eave,
  'dev-parachain': zenlink,
  'dock-pos-main-runtime': dockMainnet,
  'dock-pos-test-runtime': dockTestnet,
  'dotmog-node': dotmog,
  edgeware,
  'encointer-node-notee': encointerNodeNotee,
  'encointer-node-teeproxy': encointerNodeTeeproxy,
  'encointer-parachain': encointerPara,
  fantour,
  galital,
  'galital-collator': galitalParachain,
  gamepower,
  'hack-hydra-dx': hydrate,
  halongbay: polkafoundry,
  hanonycash,
  heiko: parallel,
  'hydra-dx': hydrate,
  idavoll,
  imbue,
  'integritee-parachain': integritee,
  'interbtc-parachain': interbtc,
  'interbtc-standalone': interbtc,
  'interlay-parachain': interbtc,
  'ipse-node': ipse,
  'joystream-node': joystream,
  'jupiter-prep': jupiter,
  'jupiter-rococo': jupiterRococo,
  kerria: parallel,
  khala,
  'kilt-parachain': kilt,
  'kilt-spiritnet': kilt,
  'kintsugi-parachain': interbtc,
  konomi,
  kpron,
  kulupu,
  kusari,
  kylin,
  laminar,
  litentry,
  mangata,
  'mangata-parachain': mangata,
  'manta-node': manta,
  'mashnet-node': kilt,
  mathchain,
  'mathchain-galois': galois,
  moonbase: moonbeam,
  moonbeam,
  moonriver: moonbeam,
  moonshadow: moonbeam,
  'mybank.network Testnet': mybank,
  neatcoin,
  nft: unique,
  nftmart,
  'node-moonbeam': moonbeam,
  'node-polkadex': polkadex,
  'nodle-chain': nodle,
  opal,
  opportunity,
  'origintrail-parachain': origintrail,
  parallel,
  parami,
  'phoenix-node': phoenix,
  'phoenix-parachain': phoenix,
  pichiu,
  'pioneer-runtime': bitcountryPioneer,
  plasm,
  polymesh,
  'pontem-node': pontem,
  prism,
  quartz,
  realis,
  'riochain-runtime': riochain,
  robonomics,
  shibuya,
  shiden,
  snowbridge,
  'sora-substrate': soraSubstrate,
  sora_ksm: soraSubstrate,
  spanner,
  stafi,
  standard,
  steam: eave,
  subdao,
  subgame,
  subsocial,
  subspace,
  'substrate-contracts-node': substrateContractsNode,
  subzero: zero,
  swapdex,
  t0rn,
  ternoa,
  trustbase,
  turing,
  uart,
  'unit-node': unitv,
  'unit-parachain': unitv,
  unorthodox: standard,
  vanilla: parallel,
  vodka,
  'web3games-node': web3games,
  'zcloak-network': zCloak,
  zeitgeist
};
export default spec;