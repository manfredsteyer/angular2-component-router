import { Component} from 'angular2/core';
import { ROUTER_DIRECTIVES, Location, RouteConfig} from 'angular2/router';
import { PassagierSuchen} from '../passagier-suchen/passagier-suchen';
import { FlugSuchen} from '../flug-suchen/flug-suchen';
import { FlugManager} from '../services/flug-manager';

@Component({
    templateUrl: 'app/flug-buchen/flug-buchen.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [FlugManager]
})
@RouteConfig([
    { path: 'passagier-suchen', component: PassagierSuchen, name: 'PassagierSuchen' },
    { path: 'flug-suchen', component: FlugSuchen, name: 'FlugSuchen', useAsDefault: true }
])
export class FlugBuchen {

    constructor(private location: Location) {
    }

    isActive(path): boolean {
        return this.location.path() == path;
    }

}