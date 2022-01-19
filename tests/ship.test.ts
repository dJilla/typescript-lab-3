import { ShippingContainer } from "../container";
import { Ship } from "../ship";
import { HeavyContainer } from '../heavy';
import { LightContainer } from "../light";

describe('Ship', () => {
    it('should return maxWeight set by constructor', () => {
        const shipA:Ship = new Ship(6000);
        expect(shipA.maxWeight).toEqual(6000);
    });

    it('should return an empty array of containers initially', () => {
        const shipA:Ship = new Ship(6000);
        expect(shipA.containers).toEqual([]);
    });

    it('should return container added by addContainer()', () => {
        const shipA:Ship = new Ship(6000);
        const containerA:ShippingContainer = {
            destination: 'Shang Hai',
            cargoWeight: 2000,

            getGrossWeight():number {
                return this.cargoWeight;
            }
        }
        shipA.addContainer(containerA);
        expect(shipA.containers[0].destination).toEqual('Shang Hai');
        expect(shipA.containers[0].cargoWeight).toEqual(2000);
    });

    it('should return both containers when addContainer() called twice', () => {
        const shipA:Ship = new Ship(6000);
        const containerA:HeavyContainer = new HeavyContainer(2000, 'Shang Hai', 2000);
        const containerB:LightContainer = new LightContainer('Antarctica', 3000);
        shipA.addContainer(containerA);
        shipA.addContainer(containerB);
        expect(shipA.containers[0].destination).toEqual('Shang Hai');
        expect(shipA.containers[0].cargoWeight).toEqual(2000);
        expect(shipA.containers[1].destination).toEqual('Antarctica');
        expect(shipA.containers[1].cargoWeight).toEqual(3000);
    });

    it('should return 0 when containers is empty and getTotalWeight() is called', () => {
        const shipA:Ship = new Ship(6000);
        expect(shipA.getTotalWeight()).toEqual(0);
    });

    it('should return true when isOverweight() is called and total weight > maxWeight', () => {
        const shipA:Ship = new Ship(6000);
        const containerA:HeavyContainer = new HeavyContainer(2000, 'Shang Hai', 2000);
        const containerB:LightContainer = new LightContainer('Antarctica', 3000);
        const containerC:LightContainer = new LightContainer('San Francisco', 2500);
        shipA.addContainer(containerA);
        shipA.addContainer(containerB);
        shipA.addContainer(containerC);
        expect(shipA.isOverweight()).toEqual(true);
    });

    it('should return false when isOverweight() is called and total weight < maxWeight', () => {
        const shipA:Ship = new Ship(6000);
        const containerB:LightContainer = new LightContainer('Antarctica', 3000);
        const containerC:LightContainer = new LightContainer('San Francisco', 2500);
        shipA.addContainer(containerB);
        shipA.addContainer(containerC);
        expect(shipA.isOverweight()).toEqual(false);
    });

    it('should return false when isOverweight() is called and total weight = maxWeight', () => {
        const shipB:Ship = new Ship(4500);
        const containerA:HeavyContainer = new HeavyContainer(2000, 'Shang Hai', 2000);
        const containerC:LightContainer = new LightContainer('San Francisco', 2500);
        shipB.addContainer(containerA);
        shipB.addContainer(containerC);
        expect(shipB.isOverweight()).toEqual(false);
    });
});