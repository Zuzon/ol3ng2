import { provideRouter, RouterConfig } from '@angular/router';
import { AccessibleMapRoutes } from './accessible-map/accessible-map.routes';
import { BingMapsRoutes } from './bing-maps/bing-maps.routes';

const routes: RouterConfig = [
    ...AccessibleMapRoutes,
    ...BingMapsRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
