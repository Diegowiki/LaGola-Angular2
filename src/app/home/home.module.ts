import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterializeModule
  ],
  declarations: [ HomeComponent ],
})
export class HomeModule { }
