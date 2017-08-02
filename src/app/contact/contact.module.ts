import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { AgmCoreModule } from '@agm/core';


import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterializeModule,
    AgmCoreModule
  ],
  declarations: [ ContactComponent ],
})
export class ContactModule {
}
