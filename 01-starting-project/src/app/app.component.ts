import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {}
