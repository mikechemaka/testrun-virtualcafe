import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faSignInAlt= faSignInAlt
  faEnvelope = faEnvelope
  faLinkedin= faLinkedin
  faWhatsapp= faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
