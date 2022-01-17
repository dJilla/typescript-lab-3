export interface ShippingContainer {

    destination:string;
    cargoWeight:number;

    getGrossWeight():number;
}

const container1:ShippingContainer = {
    destination: 'Tokyo',
    cargoWeight: 250,

    getGrossWeight: function (): number {
        return this.cargoWeight;
    }
}

console.log(container1.getGrossWeight());