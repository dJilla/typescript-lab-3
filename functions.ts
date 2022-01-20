import {ShippingContainer} from './container';
import {Ship} from './ship';
import {Transporter} from './transporter';

export function findContainersByDestination(containers:ShippingContainer[], destination:string) {

    let result:ShippingContainer[] = [];

    containers.forEach(item => {
        if (item.destination === destination) {
            result.push(item);
        }
    });
    return result;
}

export function findOverweightTransporters(transporters:Transporter[]) {

    let result:Transporter[] = [];

    transporters.forEach(item => {
        if (item.isOverweight() === true) {
            result.push(item);
        }
    });
    return result;
}

export function isSafeToAddContainer(ship:Ship, container:ShippingContainer) {

    if (ship.isOverweight() === true) {
        return false;
    } else if (ship.isOverweight() === false && (ship.getTotalWeight() + container.cargoWeight) > ship.maxWeight) {
        return false;
    } else {
        return true;
    }
}

const containerA:ShippingContainer = {
    destination: 'Shang Hai',
    cargoWeight: 2000,

    getGrossWeight():number {
        return this.cargoWeight;
    }
}
const containerB:ShippingContainer = {
    destination: 'Los Angeles',
    cargoWeight: 3000,

    getGrossWeight():number {
        return this.cargoWeight;
    }
}
const containerC:ShippingContainer = {
    destination: 'Shang Hai',
    cargoWeight: 2200,

    getGrossWeight():number {
        return this.cargoWeight;
    }
}

const list1:ShippingContainer[] = [containerA, containerB, containerC];
console.log(findContainersByDestination(list1, 'Shang Hai'));
const ship1:Ship = new Ship(5000);
console.log(isSafeToAddContainer(ship1, containerB));