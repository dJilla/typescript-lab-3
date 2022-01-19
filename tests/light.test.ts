import { LightContainer } from "../light"

describe('lightContainer', () => {
    it('should return destination "Tokyo" when set via constructor', () => {
        const containerX:LightContainer = new LightContainer('Tokyo', 500);
        expect(containerX.destination).toEqual('Tokyo');
    });

    it('should return cargo weight "500" when set via constructor', () => {
        const containerX:LightContainer = new LightContainer('Tokyo', 500);
        expect(containerX.cargoWeight).toEqual(500);
    });

    it('should return cargo weight 500 when getGrossWeight() is called', () => {
        const containerX:LightContainer = new LightContainer('Tokyo', 500);
        expect(containerX.getGrossWeight()).toEqual(500);
    });

    it('should return cargo weight 750 when getGrossWeight() is called', () => {
        const containerY:LightContainer = new LightContainer('Istanbul', 750);
        expect(containerY.getGrossWeight()).toEqual(750);
    });
});