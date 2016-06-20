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
import { Layer } from './layer';
import { View } from './view';

@Component({
    selector: 'map',
    template: ' ',
    styles: [':host{display:block;}'],
    directives: [Layer, View]
})
export class Map implements AfterViewInit, AfterContentInit {
    @ContentChildren(Layer)
    private _layers: QueryList<Layer>;
    @ContentChild(View)
    private _view: View;
    public olInstance: ol.Map;
    constructor(private _el: ElementRef) {
    }
    ngAfterViewInit(): void {
        console.log('after view init', this._layers.length);
        this.olInstance = new ol.Map({
            layers: [],
            target: this._el.nativeElement,
            view: this._view.olInstance
        });
        this._layers.forEach(item => {
            this.olInstance.addLayer(item.olInstance);
        });
        
    }
    ngAfterContentInit(): void {
        console.log('after content init', this._layers);
    }
}
