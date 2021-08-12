import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { faSearch, faSquare, faTimes, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  faSquare= faSquare
  isMenuCollapsed: any
  faSearch=faSearch
  faTrash=faTrash
  faTimes=faTimes
  faUpload=faUpload

  ngOnInit(): void {}
  selectedFile = null;

  constructor(private http: HttpClient){ }
  onFileInput(event: any){
    this.selectedFile = event.target.files[0];
  }
  onUpload(event:any){
      alert("Upload was succesful");
      console.log(event);
   
  }




  
}
