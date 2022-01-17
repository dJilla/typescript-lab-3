import {ShippingContainer} from './container';

export class LightContainer implements ShippingContainer{

    constructor(public destination:string, public cargoWeight:number) {
    }

    getGrossWeight():number {
        return this.cargoWeight;
    }
}