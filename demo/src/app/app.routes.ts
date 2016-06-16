import { provideRouter, RouterConfig } from '@angular/router';
import { AccessibleMapRoutes } from './accessible-map/accessible-map.routes';

const routes: RouterConfig = [
    ...AccessibleMapRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
