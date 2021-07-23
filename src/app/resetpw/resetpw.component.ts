import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {
  faEnvelope = faEnvelope
  faLinkedin= faLinkedin
  faWhatsapp= faWhatsapp
  constructor() { }

  ngOnInit(): void {
  }

}
