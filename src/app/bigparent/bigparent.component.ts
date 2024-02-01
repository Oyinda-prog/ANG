import { Component } from '@angular/core';
import { BigparentService } from '../services/bigparent.service';
interface itemObject{
  name:string,
  price:number,
  Availability:string
  quantity:number,
 
}
@Component({
  selector: 'app-bigparent',
  templateUrl: './bigparent.component.html',
  styleUrls: ['./bigparent.component.css']
})
export class BigparentComponent {
  
  constructor(public budget:BigparentService){}
 itemArray:itemObject[]=[
  {
    name:'Yam',
  price:200,
  Availability:'Not available',
  quantity:12,
  },
  {name:'Akara',
  price:200,
  Availability:'available',
  quantity:12,},
  
  {name:'Orange',
  price:1000,
  Availability:'Not available',
  quantity:3,},

  {name:'Beans',
  price:40,
  Availability:'available',
  quantity:32,},

  {name:'Bread',
  price:1000,
  Availability:'Not available',
  quantity:5,},
  
 ]
 updateBudget(item:itemObject){
 
this.budget.budget.next(item)
 }

}
