import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    // home route
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }

];
