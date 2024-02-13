import { Routes } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent, },
  { path: 'projects', title: 'Projects', component: ProjectsComponent, },
  { path: 'technologies', title: 'Technologies', component: TechnologiesComponent, },
  { path: 'experiences', title: 'Professional experience', component: ExperiencesComponent, },

  //Redirection to home
  { path: '', redirectTo: '/home', pathMatch: 'full', }
];
