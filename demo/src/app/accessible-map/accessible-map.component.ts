import { Component, OnInit } from '@angular/core';
import { Ol3Ng2 } from 'ol3ng2';

@Component({
  moduleId: module.id,
  selector: 'app-accessible-map',
  templateUrl: 'accessible-map.component.html',
  styleUrls: ['accessible-map.component.css'],
  directives: [Ol3Ng2]
})
export class AccessibleMapComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
