import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';

(() => {
  createApplication(appConfig).then(({ injector }) => {
    customElements.define(
      'app-mfe3',
      createCustomElement(AppComponent, { injector })
    );
  });
})();
