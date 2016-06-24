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
import {Vector} from '../layers/vector';
@Component({
    selector: 'ol-vector > vector-source',
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
    
    constructor(@Host() @Inject(forwardRef(() => Vector)) private layer: Vector){

    }

    ngAfterViewInit(): void {
        console.log('init vector source');
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
            console.log('add feature to the source', item);
            this.olInstance.addFeature(item.olInstance);
        });
        if(this.layer){
            console.log('set source');
            this.layer.olInstance.setSource(this.olInstance);
        }
    }

    ngOnDestroy(): void {
        this.olInstance.clear(true);
    }
}