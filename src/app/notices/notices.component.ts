import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faStar } from '@fortawesome/free-regular-svg-icons';
import {  faMinus, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  faCalenderCheck=faCalendarCheck
   faMinus= faMinus
  faSearch=faSearch
  faStar=faStar
  isCollaped: any
  isCollapsed: any
  collapse: any
  constructor() { }

  ngOnInit(): void {
  }
 
}
