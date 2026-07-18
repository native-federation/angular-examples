import {withNativeFederation, fromPackageJson} from '@angular-architects/native-federation/config';

export default withNativeFederation({
  name: "host",
  shared: fromPackageJson({ singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' })
    .patch(['@angular/core'], {includeSecondaries: {keepAll: true}})
    .get(),
  sharedMappings: ["@ng-internal/event-bus", "@ng-internal/navigation", "@ng-internal/url", "@ng-internal/ui", "@ng-internal/logging"],
  skip: [
    'rxjs/ajax', 
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: {
    mappingVersion: true,   // by default now
    ignoreUnusedDeps: true, // by default now
    denseChunking: true,
    denseExternals: true,
    integrityHashes: true
  }
});
