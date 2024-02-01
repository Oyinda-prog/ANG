import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-emit3',
  templateUrl: './emit3.component.html',
  styleUrls: ['./emit3.component.css']
})
export class Emit3Component {
 @Input() public connectToChild=''
@Output() emitter=new EventEmitter()
public sendToParent=''

sendToPnt(){
this.emitter.emit(this.sendToParent)
}
}
