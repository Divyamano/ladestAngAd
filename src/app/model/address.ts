export class Address {
    id:number;
    name:string;
    address:string;
    email:string;
    contact:number;
    constructor(values:Object={}){
        Object.assign(this,values);

    }
}