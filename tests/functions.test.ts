import {ShippingContainer} from 'C://Users/dloka/Desktop/GC-Work/typescript-lab-3/container';
import { LightContainer } from '../light';
import { HeavyContainer } from 'C://Users/dloka/Desktop/GC-Work/typescript-lab-3/heavy';
import { Transporter } from '../transporter';
import {Truck} from 'C://Users/dloka/Desktop/GC-Work/typescript-lab-3/truck';
import { findContainersByDestination } from '../functions';
import { findOverweightTransporters } from 'C://Users/dloka/Desktop/GC-Work/typescript-lab-3/functions';
import { isSafeToAddContainer } from 'C://Users/dloka/Desktop/GC-Work/typescript-lab-3/functions';
import { Ship } from '../ship';

describe('findContainersByDestination', () => {
    it('should return LightContainers by destination', () => {
        const containerA:LightContainer = {
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
        expect(findContainersByDestination(list1, 'Shang Hai')[0].destination).toEqual('Shang Hai');
        expect(findContainersByDestination(list1, 'Shang Hai')[0].destination).toEqual('Shang Hai');
    });

    it('should return LightContainers or HeavyContainers by destination', () => {
        const containerX:LightContainer = {
            destination: 'Shang Hai',
            cargoWeight: 2000,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const containerY:HeavyContainer = {
            tareWeight: 2500,
            destination: 'Los Angeles',
            cargoWeight: 3000,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const containerZ:LightContainer = {
            destination: 'Shang Hai',
            cargoWeight: 2200,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const list2:ShippingContainer[] = [containerX, containerY, containerZ];
        expect(findContainersByDestination(list2, 'Shang Hai')[0].destination).toEqual('Shang Hai');
        expect(findContainersByDestination(list2, 'Shang Hai')[0].destination).toEqual('Shang Hai');
    });

    it('should return an empty array when no destinations match', () => {
        const container1:ShippingContainer = {
            destination: 'Seoul',
            cargoWeight: 2000,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const container2:ShippingContainer = {
            destination: 'Venice',
            cargoWeight: 2500,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const container3:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 3200,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const list3:ShippingContainer[] = [container1, container2, container3];
        expect(findContainersByDestination(list3, 'Istanbul')).toEqual([]);
    });

    it('should return an empty array when array of containers is empty', () => {
        const list4:ShippingContainer[] = [];
        expect(findContainersByDestination(list4, 'Anywhere')).toEqual([]);
    });
});

describe('findOverweightTransporters', () => {
    it('should return overweight Trucks', () => {
        const truck1:Truck = new Truck(2500);
        const truck2:Truck = new Truck(2000);
        const truck3:Truck = new Truck(1500);
        const trucks:Truck[] = [truck1, truck2, truck3];
        const container2k:LightContainer = new LightContainer('Phoenix', 2000);
        truck1.addContainer(container2k);
        truck2.addContainer(container2k);
        truck3.addContainer(container2k);
        expect(findOverweightTransporters(trucks)).toEqual([truck3]);
    });

    it('should return overweight Trucks and Ships', () => {
        const transporter1:Truck = new Truck(2800);
        const transporter2:Ship = new Ship(4000);
        const transporter3:Ship = new Ship(5000);
        const transporter4:Truck = new Truck(2000);
        const transporter5:Ship = new Ship(3000);
        const transporters:Transporter[] = [transporter1, transporter2, transporter3, transporter4, transporter5];
        const heavy:HeavyContainer = new HeavyContainer(1000, 'Tokyo', 3200);
        const light:LightContainer = new LightContainer('Seattle', 2800);
        transporter1.addContainer(light);
        transporter2.addContainer(heavy);
        transporter3.addContainer(heavy);
        transporter4.addContainer(light);
        transporter5.addContainer(heavy);
        expect(findOverweightTransporters(transporters)).toEqual([transporter4, transporter5]);
    });

    it('should return an empty array when no transporters are overweight', () => {
        const transporterX:Truck = new Truck(2800);
        const transporterY:Ship = new Ship(4000);
        const transporterZ:Ship = new Ship(5000);
        const transporters2:Transporter[] = [transporterX, transporterY, transporterZ];
        const container2k:LightContainer = new LightContainer('Anywhere', 2000);
        expect(findOverweightTransporters(transporters2)).toEqual([]);
    });

    it('should return an empty array when transporter array is empty', () => {
        const transporters3:Transporter[] = [];
        expect(findOverweightTransporters(transporters3)).toEqual([]);
    });
});

describe('isSafeToAddContainer', () => {
    it('should return true for an empty ship with empty container', () => {
        const ship1:Ship = new Ship(5000);
        const emptyLight:LightContainer = new LightContainer('Nowhere', 0);
        expect(isSafeToAddContainer(ship1, emptyLight)).toEqual(true);
    });

    it('should return true for an empty ship with LightContainer not exceeding maxWeight', () => {
        const ship1:Ship = new Ship(5000);
        const light1:LightContainer = new LightContainer('New York', 2500);
        expect(isSafeToAddContainer(ship1, light1)).toEqual(true);
    });

    it('should return true for an empty ship with HeavyContainer not exceeding maxWeight', () => {
        const ship1:Ship = new Ship(5000);
        const heavy1:HeavyContainer = new HeavyContainer(1500, 'Miami', 3000);
        expect(isSafeToAddContainer(ship1, heavy1)).toEqual(true);
    });

    it('should return false for an empty ship and LightContainer exceeding maxWeight', () => {
        const ship2:Ship = new Ship(2400);
        const light1:LightContainer = new LightContainer('New York', 2500);
        expect(isSafeToAddContainer(ship2, light1)).toEqual(false);
    });

    it('should return false for an empty ship and HeavyContainer exceeding maxWeight', () => {
        const ship2:Ship = new Ship(2400);
        const heavy1:HeavyContainer = new HeavyContainer(1500, 'Miami', 3000);
        expect(isSafeToAddContainer(ship2, heavy1)).toEqual(false);
    });

    it('should return true for an empty ship and container = maxWeight', () => {
        const ship3:Ship = new Ship(2500);
        const heavy2:HeavyContainer = new HeavyContainer(1000, 'New York', 1500);
        expect(isSafeToAddContainer(ship3, heavy2)).toEqual(true);
    });

    it('should return true for a loaded ship and a container that can be added', () => {
        const ship1:Ship = new Ship(5000);
        const light1:LightContainer = new LightContainer('New York', 2500);
        const light2:LightContainer = new LightContainer('New York', 1500);
        ship1.addContainer(light1);
        expect(isSafeToAddContainer(ship1, light2)).toEqual(true);
    });

    it('should return false for a loaded ship and a container that cannot be added', () => {
        const ship1:Ship = new Ship(5000);
        const light1:LightContainer = new LightContainer('New York', 2500);
        const light2:LightContainer = new LightContainer('New York', 1500);
        const light3:LightContainer = new LightContainer('Boston', 1200);
        ship1.addContainer(light1);
        ship1.addContainer(light2);
        expect(isSafeToAddContainer(ship1, light3)).toEqual(false);
    });
});