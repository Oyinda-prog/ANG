import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface itemObject{
  name:string,
  price:number,
  Availability:string
  quantity:number,
 
}
@Injectable({
  providedIn: 'root'
})
export class BigparentService {

  constructor() { }
  newMessage = new EventEmitter<string>();
  public budget=new BehaviorSubject<itemObject>({
    name:'engineer',
    price:12,
    Availability:'Available',
    quantity:45,
  })
}
