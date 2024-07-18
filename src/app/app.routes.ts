import { Routes } from '@angular/router';
import { HomeComponent } from './domains/home/home.component';
import { LoginComponent } from './domains/login/login.component';
import { RegisterComponent } from './domains/register/register.component';
import { ProjectComponent } from './domains/project/project.component';

export const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'project', component: ProjectComponent}
];
