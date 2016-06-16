import { Component } from '@angular/core';
import {Route, ROUTER_DIRECTIVES} from '@angular/router';
import {MATERIAL_DIRECTIVES} from "ng2-material";
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MATERIAL_DIRECTIVES
    ]
})
export class AppComponent {
  title = 'app works!';
}
