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
    Type,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { Map } from './map';


@Component({
    selector: 'map > view',
    template: ' ',
    styles: [],
    directives: [],
    inputs: [
        'center', 
        'zoom'
    ]
})
export class View implements AfterContentInit {
    private _center: ol.Coordinate;
    private _zoom: number;
    private _map: Map;
    public olInstance: ol.View;
    @Output()
    centerChange: EventEmitter<ol.Coordinate> = new EventEmitter<ol.Coordinate>();
    @Output()
    zoomChange: EventEmitter<number> = new EventEmitter<number>();
    
    constructor(@Host() @Inject(forwardRef(() => Map)) map: Map) {
        this._map = map;
    }
    ngAfterContentInit(): void {
        this.olInstance = new ol.View({
            center: this.center,
            zoom: this._zoom
        });
        this.olInstance.on(['propertychange'], (event: any) => {
            if(event.key === 'resolution'){
                setTimeout(()=>{this.zoomChange.emit(this.olInstance.getZoom());}, 10);
            }
            if(event.key === 'center'){
                setTimeout(()=>{this.centerChange.emit(this.olInstance.getCenter());}, 10);
            }
        });
        if(this._map.olInstance){
            this._map.olInstance.setView(this.olInstance);
        }
    }
    
    public get center(): ol.Coordinate {
        return this._center;
    }
    
    @Input()
    public set center(value: ol.Coordinate) {
        this._center = value;
        if(this.olInstance){
            this.olInstance.setCenter(value);
        }
    } 

    public get zoom(): number {
        return this._zoom;
    }
    @Input()
    public set zoom(value: number) {
        this._zoom = value;
        if(this.olInstance){
            this.olInstance.setZoom(value);
        }
    } 
}