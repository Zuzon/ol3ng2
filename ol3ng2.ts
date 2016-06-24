/// <reference path="openlayers.d.ts" />
import {Map} from './src/map';
import {Tile} from './src/layers/tile';
import {View} from './src/view';
import {Vector} from './src/layers/vector';
import {VectorSource} from './src/source/vector';
import {Feature} from './src/feature';

export const Ol3Ng2 = [
    Map,
    Tile,
    Vector,
    View,
    VectorSource,
    Feature
];
