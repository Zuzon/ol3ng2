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

@Component({
    selector: 'vector > vector-source',
    template: ' ',
    styles: [],
    directives: [],
    inputs: [
        'format',
        'loader',
        'logo',
        'strategy',
        'wrapX',
        'useSpatialIndex'
    ],
    outputs: [
    ]
})
export class VectorSource implements AfterContentInit {

    private _features: ol.Feature[];
    private _format: ol.format.Feature;
    private _loader: ol.FeatureLoader;
    private _logo: olx.LogoOptions;
    private _strategy: ol.LoadingStrategy;
    private _wrapX: boolean;
    private _useSpatialIndex: boolean;

    public olInstance: ol.source.Vector;
    
    constructor(){

    }

    ngAfterContentInit(): void {

    }
}