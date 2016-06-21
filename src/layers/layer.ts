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
import { Base } from './base';
import { Map } from '../map';
export class Layer extends Base {
    private _source: ol.source.Source;

    sourceChange: EventEmitter<ol.source.Source> = new EventEmitter<ol.source.Source>();

    public get source(): ol.source.Source {
        return this._source;
    }

    public set source(value: ol.source.Source) {
        this._source = value;
        if(this.olInstance){
            this.olInstance.setSource(value);
        }
    }

    constructor(_map: Map) {
        super(_map);
    }

    onLayerPropertyChange(event: any): void {
        this.onBasePropertyChange(event);
        if(event.key === 'source'){
            setTimeout(()=>{this.sourceChange.emit(this.olInstance.getSource());}, 10);
            return;
        }
    }
}