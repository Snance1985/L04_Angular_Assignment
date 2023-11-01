import { Component } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  carList: Car[] = [
    {
      carModel: 'Model 3',
      company: 'Tesla',
      makeYear: 2018,
      vehicleClass: 'Compact Executive Car',
      bodyStyle: '4 Door Fastback Sedan'
    },
    {
      carModel: 'Outlander',
      company: 'Mitsubishi',
      makeYear: 2017,
      vehicleClass: 'Compact crossover SUV',
      bodyStyle: '5 Door CUV'
    },
    {
      carModel: 'Prius',
      company: 'Toyota',
      makeYear: 2019,
      vehicleClass: 'Compact Car',
      bodyStyle: '4 Door Sedan'
    },
    {
      carModel: '911 GT3',
      company: 'Porsche',
      makeYear: 2014,
      vehicleClass: 'Sports Car',
      bodyStyle: '2 Door Coupe'
    }
  ];

  selectedCar: Car | null = null;

  onCarSelected(car: Car): void {
    this.selectedCar = car;
  }
}