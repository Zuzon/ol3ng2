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
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { Map } from '../map';
export class Base {
    private _opacity: number;
    private _visible: boolean;
    private _extent: ol.Extent;
    private _zIndex: number;
    private _minResolution: number;
    private _maxResolution: number;
    public olInstance: any;

    opacityChange: EventEmitter<number> = new EventEmitter<number>();

    visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    extentChange: EventEmitter<ol.Extent> = new EventEmitter<ol.Extent>();

    zIndexChange: EventEmitter<number> = new EventEmitter<number>();

    minResolutionChange: EventEmitter<number> = new EventEmitter<number>();

    maxResolutionChange: EventEmitter<number> = new EventEmitter<number>();

    public get opacity(): number {
        return this._opacity;
    }
    public set opacity(value: number) {
        this._opacity = value;
        if(this.olInstance){
            this.olInstance.setOpacity(value);
        }
    }

    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        this._visible = value;
        if(this.olInstance){
            this.olInstance.setVisible(value);
        }
    }

    public get extent(): ol.Extent {
        return this._extent;
    }
    public set extent(value: ol.Extent) {
        this._extent = value;
        if(this.olInstance){
            this.olInstance.setExtent(value);
        }
    }

    public get zIndex(): number {
        return this._zIndex;
    }
    public set zIndex(value: number) {
        this._zIndex = value;
        if(this.olInstance){
            this.olInstance.setZIndex(value);
        }
    }

    public get minResolution(): number {
        return this._minResolution;
    }
    public set minResolution(value: number) {
        this._minResolution = value;
        if(this.olInstance){
            this.olInstance.setMinResolution(value);
        }
    }

    public get maxResolution(): number {
        return this._minResolution;
    }
    public set maxResolution(value: number) {
        this._maxResolution = value;
        if(this.olInstance){
            this.olInstance.setMaxResolution(value);
        }
    }

    constructor(public _map: Map) {
    }

    onBasePropertyChange(event: any): void {
        if(event.key === 'extent'){
            setTimeout(()=>{this.extentChange.emit(this.olInstance.getExtent());}, 10);
            return;
        }
        if(event.key === 'maxresolution'){
            setTimeout(()=>{this.maxResolutionChange.emit(this.olInstance.getMaxResolution());}, 10);
            return;
        }
        if(event.key === 'minresolution'){
            setTimeout(()=>{this.minResolutionChange.emit(this.olInstance.getMinResolution());}, 10);
            return;
        }
        if(event.key === 'opacity'){
            setTimeout(()=>{this.opacityChange.emit(this.olInstance.getOpacity());}, 10);
            return;
        }
        if(event.key === 'visible'){
            setTimeout(()=>{this.visibleChange.emit(this.olInstance.getVisible());}, 10);
            return;
        }
        if(event.key === 'zindex'){
            setTimeout(()=>{this.visibleChange.emit(this.olInstance.getVisible());}, 10);
            return;
        }
    }
}