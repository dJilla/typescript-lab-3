export interface ShippingContainer {

    destination:string;
    cargoWeight:number;

    getGrossWeight():number;
}

const containerA:ShippingContainer = {
    destination: 'Shang Hai',
    cargoWeight: 2000,

    getGrossWeight():number {
        return this.cargoWeight;
    }
}

console.log(containerA);