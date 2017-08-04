import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import 'hammerjs';

import { MaterializeModule } from 'ng2-materialize';
import { AngularFireModule } from 'angularfire2';
import { ROUTES } from './app.routing';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { NgxGalleryModule } from 'ngx-gallery';




import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { ContactModule } from './contact/contact.module';
import { CartaModule } from './carta/carta.module';
import { GaleriaModule } from './galeria/galeria.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterializeModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1BONWlwG9L6UkiVMlHXhzNDsWWbLXhqA'
    }),
    NgxGalleryModule,

    HomeModule,
    MenuModule,
    ContactModule,
    CartaModule,
    GaleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
