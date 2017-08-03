import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

import { CartaComponent } from './carta.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterializeModule
  ],
  declarations: [ CartaComponent ],
})
export class CartaModule { }
