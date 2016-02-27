import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/add/operator/map';
import {FlugService } from './services/flug-service';
import {provide, PLATFORM_PIPES} from 'angular2/core';
import {OrtPipe} from './pipes/ort-pipe';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import { FlugManager} from './services/flug-manager';

var services = [
    provide("BASE_URL", { useValue: 'http://www.angular.at' }),
    FlugService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FlugManager,
    // provide(APP_BASE_HREF, { useValue: '/' }),
    provide(PLATFORM_PIPES, { useValue: OrtPipe, multi: true })
    // provide(FlugService, { useClass: FlugService })
];

bootstrap(App, services);

