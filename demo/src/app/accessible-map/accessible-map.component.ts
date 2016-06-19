import { Component, OnInit } from '@angular/core';
import { Ol3Ng2 } from 'ol3ng2';

@Component({
  selector: 'app-accessible-map',
  templateUrl: 'app/accessible-map/accessible-map.component.html',
  styleUrls: ['app/accessible-map/accessible-map.component.css'],
  directives: [Ol3Ng2]
})
export class AccessibleMapComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
