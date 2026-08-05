import { Type } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeFederationResult } from '@softarc/native-federation-orchestrator';

export const routes = ({ initRemoteEntry }: NativeFederationResult): Routes => [
  {
    path: 'mfe3',
    loadComponent: () =>
      initRemoteEntry('http://localhost:4203/remoteEntry.json', 'mfe3')
        .then((nf) =>
          nf
            .as<{ AppComponent: Type<unknown> }>()
            .loadRemoteModule('mfe3', './Component'),
        )
        .then((m) => m.AppComponent),
  },
  {
    path: 'mfe4',
    loadComponent: () =>
      import('./loading-shell/loading-shell.component').then(
        (m) => m.LoadingShellComponent,
      ),
  },
];
