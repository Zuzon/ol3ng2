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
        'source',
        'useInterimTilesOnError'
    ],
    outputs: [
        'opacity',
        'visible',
        'extent',
        'zIndex',
        'minResolution',
        'maxResolution',
        'source',
        'useInterimTilesOnError'
    ]
})
export class Tile extends Layer implements AfterContentInit {
    private _useInterimTilesOnError: boolean;

    useInterimTilesOnErrorChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public get useInterimTilesOnError(): boolean {
        return this._useInterimTilesOnError;
    }

    public set useInterimTilesOnError(value: boolean) {
        this._useInterimTilesOnError = value;
        if(this.olInstance){
            this.olInstance.setUseInterimTilesOnError(value);
        }
    }
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
            if(event.key === 'useinterimtilesonerror'){
                setTimeout(()=>{this.useInterimTilesOnErrorChange.emit(this.olInstance.getUseInterimTilesOnError());}, 10);
                return;
            }
        });
        if(this._map.olInstance){
            this._map.olInstance.addLayer(this.olInstance);
        }
    }
    ngOnDestroy(): void {
        this._map.olInstance.removeLayer(this.olInstance);
    } 
}