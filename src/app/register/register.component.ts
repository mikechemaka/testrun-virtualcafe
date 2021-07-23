import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
faPaperPlane= faPaperPlane;
faEnvelope = faEnvelope
  faLinkedin= faLinkedin
  faWhatsapp= faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
