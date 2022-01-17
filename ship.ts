import {ShippingContainer} from './container';
import {Transporter} from './transporter';

export class Ship implements Transporter {

    containers:ShippingContainer[];

    constructor(public maxWeight:number) {
    }

    addContainer(container:ShippingContainer):void{
    }

    getTotalWeight():number {
    
        if (this.containers.length === 0) {
            return 0;
        }

        let result:number = 0

        this.containers.forEach(container => {
            result += container.cargoWeight;
        });

        return result;
    }

    isOverweight():boolean {
        if (this.getTotalWeight() > this.maxWeight) {
            return true;
        } else {
            return false;
        }
    }
}