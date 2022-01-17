export interface Transporter {

    maxWeight:number;

    addContainer(container):void;
    getTotalWeight():number;
    isOverweight():boolean;
}