import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StackComponent } from './components/stack/stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent, },
  { path: 'projects', title: 'Projects', component: ProjectsComponent, },
  { path: 'stack', title: 'Working stack', component: StackComponent, },
  { path: 'experiences', title: 'Professional experience', component: ExperiencesComponent, },

  //Redirection to home
  { path: '', redirectTo: '/home', pathMatch: 'full', }
];
