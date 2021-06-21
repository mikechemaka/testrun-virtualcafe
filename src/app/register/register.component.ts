import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
faPaperPlane= faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
