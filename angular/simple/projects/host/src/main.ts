import {
  initFederation,
  NativeFederationResult,
} from '@softarc/native-federation-orchestrator';
import {
  useShimImportMap,
  consoleLogger,
  globalThisStorageEntry,
} from '@softarc/native-federation-orchestrator/options';

const manifest = {
  'team/mfe1': 'http://localhost:4201/remoteEntry.json',
  mfe2: 'http://localhost:4202/remoteEntry.json',
};

initFederation(manifest, {
  ...useShimImportMap({ shimMode: true }),
  logger: consoleLogger,
  storage: globalThisStorageEntry,
  hostRemoteEntry: './remoteEntry.json',
  logLevel: 'debug',
  profile: {
    latestSharedExternal: false,
    overrideCachedRemotesIfURLMatches: true,
  },
  sse: true,
})
  .then((nf: NativeFederationResult) => {
    console.log(nf.config);
    return import('./bootstrap').then((m: any) => m.bootstrap(nf));
  })
  .catch((err) => console.error(err));
