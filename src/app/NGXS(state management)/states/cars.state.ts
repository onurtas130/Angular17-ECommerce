import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { AddCar } from "../actions/cars.actions";

@State<string[]>({
    name:"cars",
    defaults:["bmw","audi"]
})

@Injectable()
export class CarsState{

    @Action(AddCar)
    addCar(ctx:StateContext<string[]>, action:AddCar){
         let state = ctx.getState();
         state.push(action.name)
    }

}