import { HeavyContainer } from "../heavy"

describe('heavyContainer', () => {
    it('should return tareWeight set by constructor', () => {
        const heavyX:HeavyContainer = new HeavyContainer(250, 'Venice', 350);
        expect(heavyX.tareWeight).toEqual(250);
    });

    it('should return destination set by constructor', () => {
        const heavyX:HeavyContainer = new HeavyContainer(250, 'Venice', 350);
        expect(heavyX.destination).toEqual('Venice');
    });

    it('should return cargoWeight set by constructor', () => {
        const heavyX:HeavyContainer = new HeavyContainer(250, 'Venice', 350);
        expect(heavyX.cargoWeight).toEqual(350);
    });

    it('should return cargoWeight 0 when omitted from constructor', () => {
        const heavyZ:HeavyContainer = new HeavyContainer(250, 'Venice');
        expect(heavyZ.cargoWeight).toEqual(0);
    });

    it('should return sum of tareWeight and cargoWeight when getGrossWeight() is called', () =>{
        const heavyX:HeavyContainer = new HeavyContainer(250, 'Venice', 350);
        expect(heavyX.getGrossWeight()).toEqual(600);
    });
});