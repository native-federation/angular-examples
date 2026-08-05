import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MODULE_LOADER } from '../app.config';

@Component({
  selector: 'app-loading-shell',
  template: `<app-mfe4></app-mfe4>`,
  styleUrls: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoadingShellComponent {
  loader = inject(MODULE_LOADER);

  constructor() {
    this.loader
      .initRemoteEntry(`http://localhost:4204/remoteEntry.json`, 'mfe4')
      .then((e) => e.loadRemoteModule('mfe4', './Bootstrap'));
  }
}
