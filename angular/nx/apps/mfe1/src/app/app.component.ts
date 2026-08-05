import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsoleLoggerService } from '@internal/logging';
@Component({
  selector: 'app-mfe1',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = signal('mfe1');

  constructor(private readonly logger: ConsoleLoggerService) {
    this.logger.log('Hello from mfe1 via internal library service');
  }
}
