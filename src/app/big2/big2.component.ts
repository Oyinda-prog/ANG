import { Component } from '@angular/core';
import { BigparentService } from '../services/bigparent.service';
interface ItemObject{
  name:string,
  price:number,
  Availability:string
  quantity:number,
 
}
@Component({
  selector: 'app-big2',
  templateUrl: './big2.component.html',
  styleUrls: ['./big2.component.css']
})
export class Big2Component {
 constructor(public serve:BigparentService){}
 obj:ItemObject={
  name:'',
  price:0,
  Availability:'',
  quantity:0,
}
 ngOnInit(){
  console.log(this.serve.budget.subscribe(response=>{
   this.obj=response;
   console.log(this.obj);
   localStorage.setItem('item',JSON.stringify(this.obj))
   
    
  }));
  
 }
 save(){
 this.obj=this.obj
 localStorage.setItem('obj',JSON.stringify(this.obj))
 }
}
