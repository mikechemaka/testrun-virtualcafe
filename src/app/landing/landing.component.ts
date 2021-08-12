import { Component, OnInit } from '@angular/core';
import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  faArrowRight= faArrowRight;
  faGraduationCap=faGraduationCap
  constructor() { }

  ngOnInit(): void {
  }

}
