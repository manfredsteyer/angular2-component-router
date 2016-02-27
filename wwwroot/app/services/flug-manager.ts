import { FlugService } from './flug-service';
import { Injectable } from 'angular2/core';
import { IFlug } from '../flug';

@Injectable()
export class FlugManager {

    constructor(private flugService: FlugService) {
    }

    fluege: Array<IFlug> = [];

    load(von, nach) {
        this.flugService
            .find(von, nach)
            .subscribe(
                fluege => {
                    this.fluege = fluege;
                },
                err => {
                    console.error("Fehler!");
                    console.error(err);
                }
            );
    }

}