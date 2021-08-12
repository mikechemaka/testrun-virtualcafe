import { Component, OnInit } from '@angular/core';
import { faArrowRight, faPlus, faTimes, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-oop',
  templateUrl: './oop.component.html',
  styleUrls: ['./oop.component.css']
})
export class OopComponent implements OnInit {
  faArrowRight=  faArrowRight
  faPlus= faPlus
  faTimes=faTimes
  faTrash= faTrash
  faUpload=faUpload

  constructor() { }

  ngOnInit(): void {
  }
  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
   
  public isCollapsed = false;

}
