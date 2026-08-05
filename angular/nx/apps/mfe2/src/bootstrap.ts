import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from "@angular/elements";

(() => {
  createApplication(appConfig).then(({injector}) => {
    customElements.define(
      'app-mfe2',
      createCustomElement(AppComponent, {injector})
    )
  })
})();