import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faChevronRight, faGraduationCap, faLocationArrow, faTrash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
faUserCircle = faUserCircle 
faBookOpen= faBookOpen
faArrowRight= faArrowRight
faTrash= faTrash
faLocationArrow=faLocationArrow
faGraduationCap=faGraduationCap
faWhatsapp= faWhatsapp
faFacebook=faFacebook
faInstagram=faInstagram
faLinkedin=faLinkedin
faChvronRight=faChevronRight

  constructor() { }

  ngOnInit(): void {
  }


}


