import { Component } from '@angular/core';
import { BigparentService } from '../services/bigparent.service';
interface ItemObject{
  name:string,
  price:number,
  Availability:string
  quantity:number,
 
}
@Component({
  selector: 'app-big1',
  templateUrl: './big1.component.html',
  styleUrls: ['./big1.component.css']
})
export class Big1Component {
constructor(public serve:BigparentService){}
obj:ItemObject={
  name:'',
  price:0,
  Availability:'',
  quantity:0,
}
ngOnInit(){
  this.serve.budget.subscribe(response=>{
    this.obj=response
    // console.log(this.obj);
    
    
  }, (e)=>{
    console.log(e);
    
  });
  
}
}
