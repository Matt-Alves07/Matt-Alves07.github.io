import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuToolbarComponent } from './shared/components/menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuToolbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
