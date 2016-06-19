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

@Component({
    selector: 'map',
    template: ' ',
    styles: [':host{display:block;}'],
    directives: [Layer]
})
export class Map implements AfterViewInit {
    public olInstance: ol.Map;
    constructor(private _el: ElementRef) {
    }
    ngAfterViewInit(): void {
        this.olInstance = new ol.Map({
            layers: [],
            target: this._el.nativeElement,
            view: new ol.View({
                center: [0, 0],
                zoom: 8
            })
        });
    }
}
