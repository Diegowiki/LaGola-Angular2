import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { CartaComponent } from './carta/carta.component';


export const ROUTES: Routes = [
    // home route
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'carta', component: CartaComponent },
    { path: '**', redirectTo: 'home' }

];
