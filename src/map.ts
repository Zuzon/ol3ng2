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
import { View } from './view';

@Component({
    selector: 'map',
    template: ' ',
    styles: [':host{display:block;}'],
    directives: [Tile, View]
})
export class Map implements AfterViewInit, AfterContentInit {
    @ContentChildren(Tile)
    private _tileLayers: QueryList<Tile>;
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
        
    }
    ngAfterContentInit(): void {
    }
}
