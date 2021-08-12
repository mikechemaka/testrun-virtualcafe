import { Injectable, OnInit  } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  

  constructor(private db: AngularFireDatabase){ }
  getMessagesList() {  
    return this.db.object('Chat').valueChanges(); 

  }
}