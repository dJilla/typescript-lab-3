import {ShippingContainer} from './container';

export class HeavyContainer implements ShippingContainer {

    constructor(public tareWeight:number, public destination:string, public cargoWeight:number = 0) {
    }

    getGrossWeight():number {
        return this.tareWeight + this.cargoWeight;
    }
}