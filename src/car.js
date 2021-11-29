export class Car {
    constructor(make,model,year){
        this.model = model;
        this.make= make;
        this.year = year;
        
    }


    info(){
        return `${this.make} ${this.model} ${this.year} `;
    }
}