import { Component } from '@angular/core';

@Component({
  selector: 'app-emit1',
  templateUrl: './emit1.component.html',
  styleUrls: ['./emit1.component.css']
})
export class Emit1Component {
public MsgToChild=''
public receiveMsg:string=''
public receive=''
receiveFromChild(message:string){
 this.receiveMsg=message
}
receiveFromChild2(msg:string){
this.receive=msg
}
}
