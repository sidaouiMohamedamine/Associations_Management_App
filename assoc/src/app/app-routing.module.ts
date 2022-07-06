import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { AssocComponent } from './assoc/assoc.component';
import { ChoixComponent } from './choix/choix.component';
import { ContactComponent } from './contact/contact.component';
import { ErreurComponent } from './erreur/erreur.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { MembreComponent } from './membre/membre.component';
import { MissionComponent } from './mission/mission.component';
import { RootPageComponent } from './root-page/root-page.component';
import { SecureGuard } from './secure.guard';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StatisticComponent } from './statistic/statistic.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent,pathMatch:'full'},
  {path:'signin',component:SigninComponent},
  {path:'choix',component:ChoixComponent},
  {path:'signupMembre/:type',component:MembreComponent},
  {path:'signupAssoc/:type',component:AssocComponent},
  {path:'rootPage',component:RootPageComponent,canActivate:[SecureGuard]},
  {path:'userList', component:ListUsersComponent,pathMatch:'full',canActivate:[SecureGuard]},
  {path:'addUser',component:AddComponent,canActivate:[SecureGuard]},
  {path:'statistic',component:StatisticComponent,canActivate:[SecureGuard]},
  {path:'side',component:SideBarComponent,},
  {path:'modifier/:idUser',component:UpdateComponent,canActivate:[SecureGuard]},
  {path:'mission',component:MissionComponent},
  {path:'' ,redirectTo:'accueil',pathMatch:'full'},
  {path:'' ,redirectTo:'accueil',pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
