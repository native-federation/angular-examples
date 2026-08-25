import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MODULE_LOADER } from '../app.config';

@Component({
  selector: 'app-loading-shell-v21',
  template: `<app-mfe5></app-mfe5>`,
  styleUrls: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoadingShellV21Component {
  loader = inject(MODULE_LOADER);

  constructor() {
    this.loader
      .initRemoteEntry(`http://localhost:4205/remoteEntry.json`, 'mfe5')
      .then((e) => e.loadRemoteModule('mfe5', './Bootstrap'));
  }
}
