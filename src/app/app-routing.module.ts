import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';


const routes: Routes = [
  {path: '', redirectTo: './landing', pathMatch:'full'},
  {path: "landing", component:LandingComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "navbar", component:NavbarComponent},
  {path: "home", component:HomeComponent},
  {path: "classes", component:ClassesComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent= [LandingComponent, LoginComponent, RegisterComponent];
