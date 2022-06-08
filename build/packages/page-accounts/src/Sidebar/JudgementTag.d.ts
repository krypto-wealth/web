import type { Judgement } from '@polkadot/react-hooks/types';
import React from 'react';
interface Props {
    judgement: Judgement;
}
declare function JudgementTag({ judgement: { judgementName, registrars } }: Props): React.ReactElement<Props>;
declare const _default: React.MemoExoticComponent<typeof JudgementTag>;
export default _default;
