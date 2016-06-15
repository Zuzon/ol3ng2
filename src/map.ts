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


@Component({
    selector: 'map',
    template: ' ',
    styles: [],
    directives: []
})
export class Map implements AfterViewInit {
    public olInstance: ol.Map;
    constructor(private _el: ElementRef) {
    }
    ngAfterViewInit(): void {
        this.olInstance = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            controls: ol.control.defaults({
                attributionOptions: ({
                    collapsible: false
                })
            }),
            target: this._el.nativeElement,
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            })
        });
    }
}
