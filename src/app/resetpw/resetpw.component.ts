import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {
  faEnvelope = faEnvelope
  faLinkedin= faLinkedin
  faWhatsapp= faWhatsapp
  faGraduationCap=faGraduationCap
  constructor() { }

  ngOnInit(): void {
  }
  validate(){
    var form = document.getElementsByClassName('needs-validation')[0]  as HTMLFormElement;
    if (form.checkValidity() === false){
      event?.preventDefault();
      event?.stopPropagation();

    }
    form.classList.add('was-validated')
  }

}
