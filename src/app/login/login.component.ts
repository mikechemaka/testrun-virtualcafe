import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faPaperPlane= faPaperPlane;
  constructor() { }

  ngOnInit(): void {
  }

}
