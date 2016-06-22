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
import {Feature} from '../feature';
@Component({
    selector: 'vector > vector-source',
    template: ' ',
    styles: [],
    directives: [Feature],
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
export class VectorSource implements AfterViewInit {

    @ContentChildren(Feature)
    private _features: QueryList<Feature>;
    private _format: ol.format.Feature;
    private _loader: ol.FeatureLoader;
    private _logo: olx.LogoOptions;
    private _strategy: ol.LoadingStrategy;
    private _wrapX: boolean;
    private _useSpatialIndex: boolean;
    private _url: string;
    public olInstance: ol.source.Vector;
    
    constructor(){

    }

    ngAfterViewInit(): void {
        this.olInstance = new ol.source.Vector({
            features: [],
            format: this._format,
            loader: this._loader,
            logo: this._logo,
            strategy: this._strategy,
            url: this._url,
            useSpatialIndex: this._useSpatialIndex,
            wrapX: this._wrapX
        });
        this._features.forEach(item => {
            this.olInstance.addFeature(item.olInstance);
        });
    }

    ngOnDestroy(): void {
        this.olInstance.clear(true);
    }
}