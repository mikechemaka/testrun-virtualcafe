import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
messages :any


  constructor(afs: AngularFirestore) { 

  }

  ngOnInit(): void {
  }
  
    public isCollapsed = false;
  
    handleSubmit(event:any){

    }

    send(){

    }


}
