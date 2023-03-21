export interface ICar {
    _id:string;
    make: string;
    model:string;
    year: string;
    imageURL: string;
}

export class NewCar implements ICar{
    _id:string;
    make: string;
    model:string;
    year: string;
    imageURL: string;

    constructor(_id:string, make:string,model:string,year:string,imageURL:string){
        this._id = _id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.imageURL = imageURL;
    }
}
