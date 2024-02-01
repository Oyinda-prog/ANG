import { Component } from '@angular/core';
interface ContactObject{
  firstname:string,
  lastname:string,
  email:string,
  phoneno:string,
  address:string,

}

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {
formControl="form-control my-2 w-100";
public firstname='';
public lastname='';
public email='';
public phoneno='';
public address='';
public contactArray:ContactObject[]=[]
ngOnInit(){
  if(localStorage["contacts"]){
    this.contactArray=JSON.parse(localStorage["contacts"])
  }else{
    this.contactArray=[]
  }
}
addContact(){
  let contactObj={
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    phoneno:this.phoneno,
    address:this.address
  };
  console.log(contactObj);

  this.contactArray.push(contactObj);
  console.log(this.contactArray); 
  localStorage.setItem("contacts",JSON.stringify(this.contactArray))
};
// deleteContact(contactindex:number){
// let filteredArray:ContactObject[]=[]
// this.contactArray.map((contact, index)=>{
// if(contactindex!=index){
//   filteredArray.push(contact)  
// };
// this.contactArray=filteredArray;
// })

// };
deleteContact(index:number){
this.contactArray.splice(index,1);

}
editContact(index:number){
console.log(index);

}


}
