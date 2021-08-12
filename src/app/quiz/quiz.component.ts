import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
faChevronRight = faChevronRight
fachevronDown= faChevronDown
  constructor() { }

  ngOnInit(): void {
  }

}
