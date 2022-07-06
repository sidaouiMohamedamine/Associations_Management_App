import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    user=new User()
    redirect=false

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

   addUser(){
   this.userService.addUser(this.user).subscribe(data=>{
    console.log('data',this.user);
    this.redirect=true
    this.router.navigate(['/userList'])
  },
    error=>console.log('erreur')
    )
}

}
