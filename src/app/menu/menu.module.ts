import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

import { MenuComponent } from './menu.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterializeModule
  ],
  declarations: [ MenuComponent ],
})
export class MenuModule { }
