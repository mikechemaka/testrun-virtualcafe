import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
faSearch= faSearch
faGraduationCap=faGraduationCap
faSignOutAlt= faSignOutAlt
isMenuCollapsed: any

  constructor() { }

  ngOnInit(): void {
  }
 
}
