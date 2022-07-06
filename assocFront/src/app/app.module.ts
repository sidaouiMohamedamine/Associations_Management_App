import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ChoixComponent } from './choix/choix.component';
import { MembreComponent } from './membre/membre.component';
import { AssocComponent } from './assoc/assoc.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RootPageComponent } from './root-page/root-page.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AddComponent } from './add/add.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FirstComponent } from './first/first.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    SignupComponent,
    SigninComponent,
    ErreurComponent,
    ChoixComponent,
    MembreComponent,
    AssocComponent,
    RootPageComponent,
    StatisticComponent,
    AddComponent,
    ListUsersComponent,
    SideBarComponent,
    FirstComponent,
    UpdateComponent,
    ContactComponent,
    MissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
