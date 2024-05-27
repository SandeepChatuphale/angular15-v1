import { Injectable } from '@angular/core';
import { Message } from 'src/model/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages:Message[] = [
    {
      "id": 1,
      "name": "Good Morning"
    },
    {
      "id": 2,
      "name": "Good Evening"
    },
    {
      "id": 3,
      "name": "Good Night"
    },
    {
      "id": 4,
      "name": "Good Afternoon"
    }
  ]

  constructor() { }

  findAll() : Message[]
  {
    return this.messages;
  }

  save(m:Message)
  {
    this.messages.push(m)
  }

}
