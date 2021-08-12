import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';


@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  message: any
 
  constructor(private chat: ChatService) { }

  ngOnInit(): void {
  }
  
  handleSubmit(event: { keyCode: number; }){
    if (event.keyCode === 13){
      this.send();
    }
  }

  send(){
 
  }
}
 
