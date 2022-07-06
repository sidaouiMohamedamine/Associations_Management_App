import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  user:User[]

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getUser()
  }
   getUser(){
        this.userService.getUser().subscribe(data=>{
          this.user=data;
          console.log(data)
        })
   }
   add(){
      this.router.navigate(['/addUser'])
   }
   modifier(idUser:number){
     this.router.navigate(['/modifier',idUser])
   }
   delete(idUser:number){
             this.userService.deleteUser(idUser).subscribe(data=>{
               console.log(data)
                this.getUser()
             })
   }
}
