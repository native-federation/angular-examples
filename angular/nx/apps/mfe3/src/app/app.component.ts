import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-mfe3',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = signal('mfe3');
}
