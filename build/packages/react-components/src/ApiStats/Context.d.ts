import type { Stats } from './types';
import React from 'react';
declare const ApiStatsContext: React.Context<Stats[]>;
declare const ApiStatsConsumer: React.Consumer<Stats[]>;
declare const ApiStatsProvider: React.Provider<Stats[]>;
export default ApiStatsContext;
export { ApiStatsConsumer, ApiStatsProvider };
