import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { NgxGalleryModule } from 'ngx-gallery';


import { GaleriaComponent } from './galeria.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterializeModule,
    NgxGalleryModule
  ],
  declarations: [ GaleriaComponent ],
})
export class GaleriaModule { }
