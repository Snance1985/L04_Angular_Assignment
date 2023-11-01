import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car | undefined;
  @Output() carSelected = new EventEmitter<Car>();

  onCarClicked(): void {
    if (this.car) {
      this.carSelected.emit(this.car);
    }
  }
}