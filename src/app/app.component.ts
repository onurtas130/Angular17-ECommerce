import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { CarsState } from './NGXS(state management)/states/cars.state';
import { AddCar } from './NGXS(state management)/actions/cars.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularStarterPack';
  cars:string[];
  constructor(private store:Store){
     this.getCars()
  }

  addCar(name:string){
    this.store.dispatch(new AddCar(name))
  }

  getCars(){
    this.store.select(state => state.cars).subscribe(data=>{
      console.log("hop")
      console.log(data)
      this.cars = data
    })
  }
}
