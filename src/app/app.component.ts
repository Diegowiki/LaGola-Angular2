import { Component } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { MzSidenavComponent } from 'ng2-materialize';
// import {} from '@types/googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {

  }

}
