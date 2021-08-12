import { Component, OnInit } from '@angular/core';
import { faArrowRight, faPlus, faTimes, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
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
