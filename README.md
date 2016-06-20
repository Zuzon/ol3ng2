# ol3ng2 [![Build Status](https://travis-ci.org/Zuzon/ol3ng2.svg?branch=master)](https://travis-ci.org/Zuzon/ol3ng2)
ol3 directives for angular 2 (under construction)
## Usage


```ts
...
import {Ol3Ng2} from 'ol3ng2/ol3ng2';
...

@Component({
      ...
      directives: [Ol3Ng2]
    })
    export class AccessibleMapComponent implements OnInit {
      public layerType = ol.layer.Tile;
      public source: ol.source.Source = new ol.source.OSM();
      public center: ol.Coordinate = [0, 0];
      public zoom: number = 2;
      ...
}
```

Build your map in template:
```html
<map>
    <layer [type]="layerType" [source]="source"></layer>
    <view [(center)]="center" [(zoom)]="zoom"></view>
</map>
```

