import { Component, OnInit, Type } from '@angular/core';
import { Ol3Ng2 } from 'ol3ng2/ol3ng2';
import {HighlightComponent, HighlightContainerComponent} from '../shared/highlight/index';
@Component({
  moduleId: module.id,
  selector: 'bing-maps',
  templateUrl: 'bing-maps.component.html',
  styleUrls: ['bing-maps.component.css'],
  directives: [Ol3Ng2, HighlightComponent, HighlightContainerComponent]
})
export class BingMapsComponent implements OnInit {
  public template: string;
  public code: string;
  public opacity: number;
  public source: ol.source.Source = new ol.source.OSM();
  public source2: ol.source.Source = new ol.source.MapQuest({
    layer: 'sat'
  });
  public center: ol.Coordinate = [0, 0];
  public zoom: number = 2;
  constructor() {
    this.opacity = 0.7;
    this.template = `
    <p>Center {{center | json}}</p>
    <input type="number" [value]="center[0]" (input)="center = [$event.target.value, center[1]]" />
    <input type="number" [value]="center[1]" (input)="center = [center[0], $event.target.value]" />
    <input type="number" [value]="zoom" (input)="zoom = $event.target.value" />
    <map style="height: 600px">
        <layer [type]="layerType" [source]="source"></layer>
        <view [(center)]="center" [(zoom)]="zoom"></view>
    </map>
    `;
    this.code = `
    @Component({
      moduleId: module.id,
      selector: 'app-accessible-map',
      templateUrl: 'accessible-map.component.html',
      styleUrls: ['accessible-map.component.css'],
      directives: [Ol3Ng2]
    })
    export class AccessibleMapComponent implements OnInit {
      public layerType = ol.layer.Tile;
      public source: ol.source.Source = new ol.source.OSM();
      public center: ol.Coordinate = [0, 0];
      public zoom: number = 2;
      ...
    `;
  }

  ngOnInit() {
  }

}
