import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

//Angular material's imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,

    // Angular Material Imports
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  public isRotaHomeAtiva: boolean = false;
  public isRotaStackAtiva: boolean = false;
  public isRotaExperienceAtiva: boolean = false;
  public isRotaProjectsAtiva: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRotaHomeAtiva = (event.url.includes('/home')) || (event.url === '/');
        this.isRotaStackAtiva = (event.url.includes('/stack'));
        this.isRotaExperienceAtiva = (event.url.includes('/experience'));
        this.isRotaProjectsAtiva = (event.url.includes('/projects'));
      }
    });
  }

  navigateTo = (route: string) => {
    this.router.navigate([route]);
  }

}
