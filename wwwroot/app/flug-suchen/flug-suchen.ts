
import {Component, provide, Inject} from 'angular2/core';
import {IFlug} from '../flug';
import { FlugManager} from '../services/flug-manager';
import { OrtPipe} from '../pipes/ort-pipe';
import { ROUTER_DIRECTIVES} from 'angular2/router';

declare var fetch: any;
 
@Component({
    selector: 'flug-suchen', // <flug-suchen></flug-suchen> <flug-suchen></flug-suchen>
    templateUrl: 'app/flug-suchen/flug-suchen.html',
    pipes: [OrtPipe],
    directives: [ROUTER_DIRECTIVES]
    
    // providers: [provide(FlugService, { useClass: FlugService }]
})
export class FlugSuchen {

    public von: string = "Graz";
    public nach: string = "Hamburg";
    public selectedFlug: IFlug;

    /*
    private flugService: FlugService;

    constructor(flugService: FlugService) {
        this.flugService = flugService;
    }
    */

    constructor(private flugManager: FlugManager) {
    }

    public suchen(): void {

        this.flugManager
            .load(this.von, this.nach);

    }

    // public fluege: Array<IFlug> = new Array<IFlug>();

    get fluege(): Array<IFlug> {
        return this.flugManager.fluege;
    }

    public selectFlug(flug: IFlug) {
        this.selectedFlug = flug;
    }

}