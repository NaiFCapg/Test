export class Customer{
    id: number;
    name: string;
    address: Address;
    DOB: Date;
    Sex: string;
    SIN: number;
    constructor(){
        this.address = new Address();
    }
}

export class Address{
    city: string;
    street: string;
    state: string;
    region: string;
}