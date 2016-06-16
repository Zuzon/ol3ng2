import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {MATERIAL_PROVIDERS} from "ng2-material";

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent, 
  [
    APP_ROUTER_PROVIDERS,
    MATERIAL_PROVIDERS
    ]
    );
