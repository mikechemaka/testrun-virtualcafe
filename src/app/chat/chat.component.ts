import { Component, OnInit } from '@angular/core';
import { faComment, faMinus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
 faMinus= faMinus
 faComment= faComment
 faPaperPlane= faPaperPlane

  constructor() { }

  ngOnInit(): void {
  }

}