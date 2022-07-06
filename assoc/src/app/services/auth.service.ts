import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  users:User[]=[
    {
    "idUser":0,
    "email":"yassineksibi@gmail.com",
    "fonction":"étudiant",
    "nom":"ksibi yassine",
    "password":"0000",
    "tel":"976545879",
    "type":"root"
  },
  {
    "idUser":3,
    "email":"mssidaoui@gmail.com",
    "fonction":"développeur",
    "nom":"sidaoui",
    "password":"0000",
    "tel":"55739106",
    "type":"membre"
  }
  ];
  public type:string;
  public nom:string;
  isloggedIn:Boolean=false;


  constructor(private router:Router) { }
  logout(){
    this.isloggedIn=false;
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('nom');
    localStorage.removeItem('type');
    this.router.navigate(['signin'])
  }

  signIn(user:User):Boolean{
      let validUser=false;
      this.users.forEach((currentUser)=>{
        if( user.email=== currentUser.email && user.password==currentUser.password ){
          validUser=true;
          this.isloggedIn=true;
          this.type=currentUser.type;
          this.nom=currentUser.nom
          localStorage.setItem("type",this.type);
          localStorage.setItem("isloggedIn",String(this.isloggedIn));
          localStorage.setItem("nom",this.nom);

        }
      });
      return validUser


  }












}
