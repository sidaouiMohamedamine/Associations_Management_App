import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  user:User=new User()
  redirect=false
  constructor(private userService:UserServiceService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


  }
  addUser(){
    let type=this.activatedRoute.snapshot.params['type']
    this.user.type=type
    this.userService.addUser(this.user).subscribe(data=>{
      console.log('data');
      this.redirect=true
      this.router.navigate(['signin'])
    },
      error=>console.log('erreur')
      )
  }

}
