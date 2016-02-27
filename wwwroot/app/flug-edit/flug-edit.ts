import {Component } from 'angular2/core';
import {RouteParams, OnActivate, OnDeactivate, CanActivate, CanDeactivate, ComponentInstruction } from 'angular2/router';

@Component({
    templateUrl: 'app/flug-edit/flug-edit.html'
})
@CanActivate((next, prev) => {
    console.debug("CanActivate");
    return true;
})
export class FlugEdit implements OnActivate, OnDeactivate, CanDeactivate {

    private id: number;

    constructor(params: RouteParams) {
        this.id = parseInt(params.get('id'));
    }

    private exitWarning = {
        show: false,
        resolve: null
    };

    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {

        this.exitWarning.show = true;

        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        }).then((decision) => {
            this.exitWarning.show = false;
            return decision;
        });
    }



    routerOnActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        console.debug("routerOnActivate");
    }

    routerOnDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any {
        console.debug("routerOnDeactivate");
    }



    info = "Flug-Edit";

}