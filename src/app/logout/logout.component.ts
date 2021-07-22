import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { faUserMd } from '@fortawesome/free-solid-svg-icons';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
faUser= faUser

faUserCircle = faUserCircle 
faUserPlus= faUserPlus
faUserSecret=faUserSecret
faUsers=faUsers
faUserTimes=faUserTimes
faUserMd=faUserMd
faSignInAlt= faSignInAlt
faSignOutAlt= faSignOutAlt
faChartArea= faChartArea


  constructor() { }

  ngOnInit(): void {
  }

}
