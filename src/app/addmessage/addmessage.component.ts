import { Component } from '@angular/core';
import { Message } from 'src/model/Message';
import { MessageComponent } from '../message/message.component';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-addmessage',
  templateUrl: './addmessage.component.html',
  styleUrls: ['./addmessage.component.css']
})
export class AddmessageComponent {
  id:number = 0;
  name:string = ''

  //DI - this is Dependency Injection 
  //using DI angular is injecting MessageService Object
  constructor(private service : MessageService){
  }

  addMessage()
  {
    console.log(this.id)
    console.log(this.name)

    const m = new Message(this.id,this.name);//this object MUST be added in messages array

    this.service.save(m)  //calling service class save() method

  }
}
