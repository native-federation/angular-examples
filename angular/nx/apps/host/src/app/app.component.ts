import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MODULE_LOADER } from './app.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  loader = inject(MODULE_LOADER);
  router = inject(Router);

  constructor() {
    this.loader.loadRemoteModule('team/mfe1', './Component');
    this.loader.loadRemoteModule('mfe2', './Component');
  }

  showMfe3() {
    this.router.navigate(['/mfe3']);
  }
  showMfe4() {
    this.router.navigate(['/mfe4']);
  }
  title = 'host';
}
