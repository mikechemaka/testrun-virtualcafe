import { Component, OnInit } from '@angular/core';
import { faArrowRight, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})

export class ClassesComponent implements OnInit {

  faArrowRight=  faArrowRight
  faTimes=faTimes
  faPlus= faPlus
  constructor() { }

  ngOnInit(): void {
  }

}
