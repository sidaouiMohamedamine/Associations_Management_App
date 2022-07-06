import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   user=new User()
   erreur=0
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
       console.log(this.user)
       let isValidUser:Boolean=this.authService.signIn(this.user);
       if(isValidUser){
        this.router.navigate(['/rootPage'])

      }
        else
        {
          this.erreur=1
          console.log("erreur d'authentification")
          console.log(isValidUser)

        }


  }









}
