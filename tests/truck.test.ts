import { ShippingContainer } from "../container";
import { Transporter } from "../transporter";
import { Truck } from "../truck";
import { LightContainer } from '../light'
import { HeavyContainer } from '../heavy'

describe('Truck', () => {
    it('should return maxWeight set by constructor', () => {
        const truckA:Truck = new Truck(800);
        expect(truckA.maxWeight).toEqual(800);
    });

    it('should return container null initially', () => {
        const truckA:Truck = new Truck(800);
        expect(truckA.container).toEqual(null);
    });

    it('should set container property when addContainer() is called', () => {
        const containerA:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 400,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const truckA:Truck = new Truck(800);
        truckA.addContainer(containerA);
        expect(truckA.container).toEqual(containerA);
    })

    it('should return gross weight of container when getTotalWeight() is called', () => {
        const containerA:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 400,
        
            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        const truckA:Truck = new Truck(800);
        truckA.addContainer(containerA);
        expect(truckA.getTotalWeight()).toEqual(containerA.cargoWeight);
    });

    it('should return gross weight of LightContainer...', () => {
        const lightA:LightContainer = new LightContainer('Anchorage', 400);
        const truckA:Truck = new Truck(800);
        truckA.addContainer(lightA);
        expect(truckA.getTotalWeight()).toEqual(lightA.cargoWeight);
    });

    it('should return gross weight of HeavyContainer...', () => {
        const heavyA:HeavyContainer = new HeavyContainer(800, 'Anchorage', 600);
        const truckA:Truck = new Truck(800);
        truckA.addContainer(heavyA);
        expect(truckA.getTotalWeight()).toEqual(heavyA.cargoWeight + heavyA.tareWeight);
    });

    it('should return 0 when getTotalWeight() is called while container = null', () => {
        const truckA:Truck = new Truck(800);
        expect(truckA.getTotalWeight()).toEqual(0);
    });

    it('should return true when total weight > maxWeight', () => {
        const containerB:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 900,
        
            getGrossWeight():number|undefined {
                return this.cargoWeight;
            }
        }
        const truckA:Truck = new Truck(800);
        truckA.addContainer(containerB);
        expect(truckA.isOverweight()).toEqual(true);
    });

    it('should return false when total weight < maxWeight', () => {
        const containerA:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 400,
        
            getGrossWeight():number|undefined {
                return this.cargoWeight;
            }
        }
        const truckA:Truck = new Truck(800);
        truckA.addContainer(containerA);
        expect(truckA.isOverweight()).toEqual(false);
    });

    it('should return false when total weight = maxWeight', () => {
        const containerC:ShippingContainer = {
            destination: 'Anchorage',
            cargoWeight: 800,
        
            getGrossWeight():number|undefined {
                return this.cargoWeight;
            }
        }
        const truckA:Truck = new Truck(800);
        truckA.addContainer(containerC);
        expect(truckA.isOverweight()).toEqual(false);
    });
});