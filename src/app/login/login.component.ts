import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service'

import { Routes } from '@angular/router';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGraduationCap, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
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
  faGraduationCap=faGraduationCap

username="";
password="";


constructor(
  private authService: AuthService) { }

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

  onSubmit(formData: { valid: any; value: { email: string; password: string; }; }) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}
