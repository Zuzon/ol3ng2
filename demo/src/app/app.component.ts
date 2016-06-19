import { Component } from '@angular/core';
import {Route, ROUTER_DIRECTIVES} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material";
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MATERIAL_DIRECTIVES
    ]
})
export class AppComponent {
  title = 'app works!';
}
