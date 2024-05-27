import { Component } from '@angular/core';
import { Message } from 'src/model/Message';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  
  //todo - make a rest call
  messages:Message[] = []

  //DI - this is Dependency Injection 
  //using DI angular is injecting MessageService Object
  constructor(private service : MessageService){
  }

  showAll()
  {
    this.messages = this.service.findAll()
  }

  deleteById(id:number)
  {
    const result = confirm('are you sure?')
    if(result)
      this.messages =  this.messages.filter(m => m.id != id)
  }
}
