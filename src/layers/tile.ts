import {
    Component,
    ViewChild,
    AfterViewInit,
    ContentChildren,
    ContentChild,
    QueryList,
    AfterContentInit,
    ElementRef,
    Host,
    Inject,
    forwardRef,
    Type
} from '@angular/core';
import { Map } from '../map';
import { Layer } from './layer';

@Component({
    selector: 'map > tile',
    template: ' ',
    styles: [],
    directives: [],
    inputs: [
        'opacity',
        'visible',
        'extent',
        'zIndex',
        'minResolution',
        'maxResolution',
        'source'
    ],
    outputs: [
        'opacity',
        'visible',
        'extent',
        'zIndex',
        'minResolution',
        'maxResolution',
        'source'
    ]
})
export class Tile extends Layer implements AfterContentInit {
    constructor(@Host() @Inject(forwardRef(() => Map)) map: Map) {
        super(map);
    }
    ngAfterContentInit(): void {
        this.olInstance = new ol.layer.Tile({
            opacity: this.opacity,
            source: this.source,
            visible: this.visible,
            extent: this.extent,
            zIndex: this.zIndex,
            minResolution: this.minResolution,
            maxResolution: this.maxResolution
        });
        this.olInstance.on(['propertychange'], (event: any) => {
            this.onLayerPropertyChange(event);
        });
        if(this._map.olInstance){
            this._map.olInstance.addLayer(this.olInstance);
        }
    }
    ngOnDestroy(): void {
        this._map.olInstance.removeLayer(this.olInstance);
    } 
}