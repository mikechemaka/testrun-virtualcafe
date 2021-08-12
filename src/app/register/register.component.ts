import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';


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
faGraduationCap=faGraduationCap

name="";
surname="";
username="";
password="";
confirmpassword="";
email="";

constructor(public authService: AuthService) { }

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
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password
       
      );
    }
  }

}
