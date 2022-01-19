import {ShippingContainer} from './container';
import {Transporter} from './transporter';
import {LightContainer} from './light';

export class Ship implements Transporter {

    containers:ShippingContainer[] = [];

    constructor(public maxWeight:number) {
    }

    addContainer(container:ShippingContainer):void{
        this.containers.push(container);
    }

    getTotalWeight():number {
    
        if (this.containers.length === 0) {
            return 0;
        }

        let result:number = 0

        this.containers.forEach(contain => {

            result += contain.cargoWeight;
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

const shipA:Ship = new Ship(6000);
const lightA:LightContainer = new LightContainer('Shang Hai', 2000);

shipA.addContainer(lightA);
console.log(shipA.containers);