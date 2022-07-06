import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
       choix:string="";
       b=true
       tab=[
        {
          id:"",
          val:""
         },
         {
          id:"association",
          val:"association"
         },
         {
          id:"membre",
          val:"membre"
         }
        ];
    constructor(private router:Router) { }
  ngOnInit(): void {
  }
  /*************************************Fonction de sélection des choix****************************************************/
  selected(e:any){
    this.choix=e.target.value;
    this.b=false

  }
  /*************************************Fonction de redirection vers la page Membre ou Association*************************/
  rederiger(){
       if(this.choix=="association")
       {
         this.router.navigate(['signupAssoc',this.choix])
        }


       else
       {
         this.router.navigate(['signupMembre',this.choix])
       }

  }


}
