import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

// import firebase modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
//cometchat




import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NoticesComponent } from './notices/notices.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { QuizComponent } from './quiz/quiz.component';
import { ChatComponent } from './chat/chat.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { TrialComponent } from './trial/trial.component';
import { TodosComponent } from './components/todos/todos.component';
import { DatacomsComponent } from './datacoms/datacoms.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SoftwareComponent } from './software/software.component';
import { OopComponent } from './oop/oop.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
// services
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

import { VideoComponent } from './video/video.component';
import { ChatInputComponent } from './chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ClassesComponent,
    NavbarComponent,
    NoticesComponent,
    LogoutComponent,
    MyprofileComponent,
    QuizComponent,
    ChatComponent,
    ResetpwComponent,
    TrialComponent,
    TodosComponent,
    DatacomsComponent,
    SoftwareComponent,
    OopComponent,
    AlgorithmsComponent,
    VideoComponent,
    ChatInputComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
 
   

  ],
  providers: [ AuthService, ChatService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }