import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { tap } from 'rxjs';
import { ICar } from '../Interfaces/cars';


@Injectable({
  providedIn: 'root'
})
export class CarApiService {
  
  constructor() {}
}
