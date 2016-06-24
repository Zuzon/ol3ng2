import { Component, OnInit, Type } from '@angular/core';
import { Ol3Ng2 } from 'ol3ng2/ol3ng2';
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
  public code: string;
  public source: ol.source.Source = new ol.source.OSM();
  public center: ol.Coordinate = [0, 0];
  public zoom: number = 2;
  public geometry: ol.geom.Geometry;
  public fStyle: ol.style.Style;
  constructor() {
    
    //this.geometry = new ol.geom.Polygon([[[-5e6, -1e6], [-4e6, 1e6], [-3e6, -1e6]]]);
    this.geometry = new ol.geom.Point([0, 0]);
    this.fStyle = new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
      }),
      stroke: new ol.style.Stroke({
        color: '#ffcc33',
        width: 2
      }),
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
          color: '#ffcc33'
        })
      })
    });
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
