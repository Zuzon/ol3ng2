import { Component, OnInit, Type } from '@angular/core';
import { Ol3Ng2 } from 'ol3ng2';
import {HighlightComponent, HighlightContainerComponent} from '../shared/highlight/index';
@Component({
  moduleId: module.id,
  selector: 'app-accessible-map',
  templateUrl: 'accessible-map.component.html',
  styleUrls: ['accessible-map.component.css'],
  directives: [Ol3Ng2, HighlightComponent, HighlightContainerComponent]
})
export class AccessibleMapComponent implements OnInit {
  public template: string;
  public layerType: Type = ol.layer.Tile;
  public source: ol.source.Source = new ol.source.OSM();
  constructor() {
    this.template = '<a>some piece of code</a>';
  }

  ngOnInit() {
  }

}
