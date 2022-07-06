import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Model/User';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user:User=new User()
  idUser:number
  redirect=false;
  constructor(private userService:UserServiceService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.idUser=this.activatedRoute.snapshot.params['idUser'];
    this.userService.getUserById(this.idUser).subscribe(data=>{
      this.user=data;
      console.log(this.user)
    },
    error=>console.log("erreur modifier"),
    )
  }
  /*updateUser(){
    this.userService.updateUser(this.idUser,this.user)
    .subscribe(data=>{
      console.log(data);
      this.user=new User();
      //this.goToList()
    },error=>console.log(error)
    )
  }*/
  onSubmit(){
    this.userService.updateUser(this.idUser,this.user)
    .subscribe(data=>{
      console.log(data);
      this.user=new User();
      this.redirect=true
      if(this.redirect==true)
      this.router.navigate(['/userList']);
    },error=>console.log(error)
    )  }

}
