# ol3ng2 [![Build Status](https://travis-ci.org/Zuzon/ol3ng2.svg?branch=master)](https://travis-ci.org/Zuzon/ol3ng2)
ol3 directives for angular 2 (under construction)
## Usage


```ts
import {HTTP_PROVIDERS} from '@angular/http';
import {Component, Injectable, provide} from '@angular/core';
import {Ol3Ng2} from 'ol3ng2/ol3ng2';
import {bootstrap} from '@angular/platform-browser-dynamic';

bootstrap(AppComponent, [
    HTTP_PROVIDERS
]);

@Component({
    selector: 'app',
    template: `
        <map>
        </map>
    `,
    directives: [
        Ol3Ng2
    ]
})
export class AppComponent {

    constructor() {
    }
}
```

Build your map in template:
```html
<map>
    <layers>
        <tile [source]="tileSource"></tile>
    </layers>
    <view [center]="[0, 0]", [zoom]="1"></view>
</map>
```

