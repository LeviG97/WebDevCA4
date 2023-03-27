import { Component, OnInit } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar } from '../Interfaces/cars';
import { NewCar } from '../Interfaces/cars';



@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})

export class CarlistComponent implements OnInit{

  carsData!: ICar;
  show!: boolean;
  _carsAPIService!: CarApiService;



  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carsAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carsAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );

    return false;
  }

}
