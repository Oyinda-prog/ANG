import { Component } from '@angular/core';
interface Student{
firstname:string,
lastname:string

}
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstclassproj';
 public name:string="hello";
 public age:number=900;
 public school:boolean=true;
 public myarray:number[]=[78];
 public myarray2:string[]=["hello"] 
 public allschool:(string|number|boolean)="ghjkk";
 public myage:any="hjkll";
 public objArray:Student[]=[
  {firstname:"Dammy",
  lastname:"Olu"}
 ];
 
//  public obj:{
//   firstname:string,
//   lastname:string,
//  }={
//   firstname:"Dammy",
//   lastname:"Olu"
//  };

 public myobject:Student={
  firstname:"Dammy",
  lastname:"Olu"
 }
 ngOnInit(){
  console.log(this.objArray[0].firstname);
  
 }

}
