import { NgModule, QueryList } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { NoticesComponent } from './notices/notices.component';
import { LogoutComponent } from './logout/logout.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChatComponent } from './chat/chat.component';
import { ResetpwComponent } from './resetpw/resetpw.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch:'full'},
  {path: "landing", component:LandingComponent},
  {path: "login", component:LoginComponent},
  {path: "register", component:RegisterComponent},
  {path: "navbar", component:NavbarComponent},
  {path: "home", component:HomeComponent},
  {path: "classes", component:ClassesComponent},
  {path: "notices", component:NoticesComponent},
  {path: "logout", component:LogoutComponent},
  {path: "myprofile", component:MyprofileComponent},
  {path: "quiz", component:QuizComponent},
  {path: "chat", component:ChatComponent},
  {path: "resetpw", component:ResetpwComponent,}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent= [LandingComponent, LoginComponent, RegisterComponent];
