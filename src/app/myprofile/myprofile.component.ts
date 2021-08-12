import { Component, OnInit } from '@angular/core';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  constructor() { }
faEnvelope = faEnvelope
faLinkedin= faLinkedin
faWhatsapp= faWhatsapp
faSearch= faSearch
time: any
meridian: any
seconds: any
show: any
currentRate: any
closeResult:any
open: any
model: any
date: any
isCollapsed:any
isMenuCollapsed: any
reset: any
close: any
alerts: any
toggleWithGreeting: any
name: any
  ngOnInit(): void {
  }

  myClickFunction(event: any) {
    alert("Button is clicked");
    console.log(event);
   } 
   toggleMeridian(event:any){

   }
   toggleSeconds(event:any){

  }
  selectToday(event:any){

  }


   onClickSubmit(data: { emailid: string; }) {
    alert("Entered Email id : " + data.emailid);

    }
}