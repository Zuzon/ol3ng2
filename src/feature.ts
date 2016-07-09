import {
    Component,
    ViewChild,
    AfterViewInit,
    ContentChildren,
    ContentChild,
    QueryList,
    AfterContentInit,
    ElementRef,
    forwardRef,
    Inject,
    Host
} from '@angular/core';
import {VectorSource} from './source/vector';
@Component({
    selector: 'ol-feature',
    template: ' ',
    styles: [],
    directives: [],
    inputs: [
        'geometry',
        'style',
        'id'
    ]
})
export class Feature {
    private _geometry: ol.geom.Geometry;
    private _style: ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction;
    private _id: number | string;
    public olInstance: ol.Feature;

    public set geometry(value: ol.geom.Geometry){
        this._geometry = value;
        if(this.olInstance){
            this.olInstance.setGeometry(value);
        }
    }
    public set style(value: ol.style.Style | ol.style.Style[] | ol.FeatureStyleFunction) {
        this._style = value;
        if(this.olInstance && typeof value !== 'function'){
            this.olInstance.setStyle(<any>value);
        }
    }
    public set id(value: number | string){
        this._id = value;
        if(this.olInstance){
            this.olInstance.setId(value);
        }
    }

    constructor(@Host() @Inject(forwardRef(() => VectorSource)) private source: VectorSource){
        this.olInstance = new ol.Feature({
            geometry: this._geometry,
            style: this._style,
            id: this._id
        });
        if(source.olInstance){
            source.olInstance.addFeature(this.olInstance);
        }
    }
    ngOnDestroy(): void {
        this.source.olInstance.removeFeature(this.olInstance);
    }
}
