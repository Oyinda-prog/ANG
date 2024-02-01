import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emit2',
  templateUrl: './emit2.component.html',
  styleUrls: ['./emit2.component.css']
})
export class Emit2Component {
@Input() public connectToChild=''
@Output() sendEmmitter=new EventEmitter
public sendToParent=''
sendMsg(){
  this.sendEmmitter.emit(this.sendToParent)
}
}
