import { Component, Input } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar } from '../Interfaces/cars';



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  @Input()
  carData!: ICar;

  carImageWidth = 300
  _carAPIService!: CarApiService;

  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
  }

}
