import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location} from 'angular2/router';
import {Home } from './home/home';
import {FlugBuchen } from './flug-buchen/flug-buchen';
import {FlugEdit } from './flug-edit/flug-edit';

declare var System: any;
var flugBuchenLoader = () => System.import("app/flug-buchen/flug-buchen").then(all => all.FlugBuchen);

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES] // router-outlet, routerLink
})
@RouteConfig([
    { path: '/', component: Home, name: 'Home', useAsDefault: true },
    { path: '/flug-buchen/...', /*component: FlugBuchen,*/ loader: flugBuchenLoader, name: 'FlugBuchen' },
    { path: '/flug-edit/:id', component: FlugEdit, name: 'FlugEdit' }
])
export class App {

    info = "Flug-Suchen App";

    constructor(private location: Location) {
    }

    isActive(path): boolean {
        if (path == '') {
            return this.location.path() == '';
        }
        return this.location.path().startsWith(path);
    }

}