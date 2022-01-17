import {ShippingContainer} from './container';
import {Transporter} from './transporter';

export class Truck implements Transporter {

    container:ShippingContainer | null = null;

    constructor(public maxWeight:number) {
    }

    addContainer(container:ShippingContainer):void {
    }

    getTotalWeight():number {
        if (this.container === null) {
            return 0;
        } else {
            return this.container.getGrossWeight();
        }
    }

    isOverweight():boolean {
        if (this.getTotalWeight() > this.maxWeight) {
            return true;
        } else {
            return false;
        }
    }
}