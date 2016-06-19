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
import { Map } from './map';


@Component({
    selector: 'map > layer',
    template: ' ',
    styles: [],
    directives: [],
    inputs: ['type', 'source']
})
export class Layer implements AfterContentInit {
    private _type: any;
    private _source: ol.source.Source;
    private _map: Map;
    public olInstance: ol.layer.Layer;
    constructor(@Host() @Inject(forwardRef(() => Map)) map: Map) {
        this._map = map;
    }
    ngAfterContentInit(): void {
        this.olInstance = new this._type({
            source: new ol.source.OSM()
        })
        this._map.olInstance.addLayer(this.olInstance);
    }
    ngOnDestroy(): void {
        this._map.olInstance.removeLayer(this.olInstance);
    }

    public get type(): any {
        return this._type;
    }
    public set type(value: any) {
        this._type = value;
    } 

    public get source(): ol.source.Source {
        return this._source;
    }
    public set source(value: ol.source.Source) {
        this._source = value;
    } 
}