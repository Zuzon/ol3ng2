import {
    Component,
    ViewChild,
    AfterViewInit,
    ContentChildren,
    ContentChild,
    QueryList,
    AfterContentInit,
    ElementRef
} from '@angular/core';
import { Tile } from './layers/tile';
import { Vector } from './layers/vector';
import { View } from './view';

@Component({
    selector: 'map',
    template: ' ',
    styles: [':host{display:block;}'],
    directives: [Tile, View, Vector]
})
export class Map implements AfterViewInit, AfterContentInit {
    @ContentChildren(Tile)
    private _tileLayers: QueryList<Tile>;
    @ContentChildren(Vector)
    private _vectorLayers: QueryList<Vector>;
    @ContentChild(View)
    private _view: View;
    public olInstance: ol.Map;
    constructor(private _el: ElementRef) {
    }
    ngAfterViewInit(): void {
        this.olInstance = new ol.Map({
            layers: [],
            target: this._el.nativeElement,
            view: this._view.olInstance
        });
        this._tileLayers.forEach(item => {
            this.olInstance.addLayer(item.olInstance);
        });
        this._vectorLayers.forEach(item => {
            console.log('add vector layer');
            this.olInstance.addLayer(item.olInstance);
        });
    }
    ngAfterContentInit(): void {
    }
}
