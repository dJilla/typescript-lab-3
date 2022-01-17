import {ShippingContainer} from './container';

export class HeavyContainer implements ShippingContainer {

    constructor(public tareWeight:number, public destination:string, public cargoWeight:number) {
    }

    getGrossWeight():number {
        return this.tareWeight + this.cargoWeight;
    }
}