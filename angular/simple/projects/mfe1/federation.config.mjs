import {withNativeFederation, fromPackageJson} from '@angular-architects/native-federation/config';

export default withNativeFederation({

  name: 'team/mfe1',
  exposes: {
    './Component': './projects/mfe1/src/bootstrap.ts',
  },
  shared: fromPackageJson({ singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' })
    .patch(['@angular/core'], {includeSecondaries: {keepAll: true}})
    .get(),

  skip: [
    'rxjs/ajax', 
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: { 
    ignoreUnusedDeps: true, // by default now
    denseChunking: true,
    denseExternals: true,
    integrityHashes: true
  }
});
