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
    EventEmitter
} from '@angular/core';
import { Map } from '../map';
import { Layer } from './layer';
import { VectorSource } from '../source/vector';

@Component({
    selector: 'ol-vector',
    template: ' ',
    styles: [],
    directives: [VectorSource],
    inputs: [
        'opacity',
        'visible',
        'extent',
        'zIndex',
        'minResolution',
        'maxResolution',
        'source',
        'map',
        'renderBuffer',
        'style',
        'updateWhileAnimating',
        'updateWhileInteracting'
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
export class Vector extends Layer implements AfterContentInit {
    private _renderBuffer: number;
    private _style: ol.style.Style | ol.style.Style[] | ol.style.StyleFunction;
    private _updateWhileAnimating: boolean;
    private _updateWhileInteracting: boolean;

    useInterimTilesOnErrorChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public set renderBuffer(value: number){
        this._renderBuffer = value;
    }
    public set updateWhileInteracting(value: boolean) {
        this._updateWhileInteracting = value;
    }
    public set updateWhileAnimating(value: boolean) {
        this._updateWhileAnimating = value;
    }

    public get style(): ol.style.Style | ol.style.Style[] | ol.style.StyleFunction {
        return this._style;
    }
    public set style(value: ol.style.Style | ol.style.Style[] | ol.style.StyleFunction) {
        this._style = value;
        if(this.olInstance){
            this.olInstance.setStyle(value);
        }
    }
    public get map(): Map {
        return this._map;
    }
    public set map(value: Map) {
        this._map = value;
        if(this.olInstance){
            this.olInstance.setMap(this._map.olInstance);
        }
    }
    constructor(@Host() @Inject(forwardRef(() => Map)) map: Map) {
        super(map);
    }
    ngAfterContentInit(): void {
        console.log('init vector layer', this._style, this.source);
        this.olInstance = new ol.layer.Vector({
            opacity: this.opacity,
            source: <ol.source.Vector>(this.source),
            visible: this.visible,
            extent: this.extent,
            zIndex: this.zIndex,
            minResolution: this.minResolution,
            maxResolution: this.maxResolution,
            style: this._style,
            map: this.map.olInstance,
            renderBuffer: this._renderBuffer,
            updateWhileAnimating: this._updateWhileAnimating,
            updateWhileInteracting: this._updateWhileInteracting
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