import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  products: Array <{name:string, price:number, inTheBasket:boolean}> = [
    {name: 'PURITO - Limpiador Defence Barrier pH Cleanser 150 ml', price: 11.70, inTheBasket: false},
    {name: 'THE ORDINARY - Niacinamide 10% Zinc 1%', price: 5.75, inTheBasket: false},
    {name: 'iUNIK - Crema en gel calmante con centella 60 ml', price: 9.50, inTheBasket: false},
  ]
  basket:Array <{name:string, price:number, inTheBasket:boolean}> = [];
  basketBackUp:Array <{name:string, price:number, inTheBasket:boolean}> = [];
  total = 0;
  constructor() { }
}
