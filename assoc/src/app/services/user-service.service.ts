import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
      private  url:"http://localhost:8080/api/User"
  constructor(private http:HttpClient) { }
  /**********************************************Méthode pour obtient la liste des utilisateurs:type de retour un taleau d'utilisateur************************/

  getUser():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8080/api/User")
  }

  /***********************************************************Méthode pour envoyer un objet de type utiliateur************************************************/

  addUser(user:User):Observable<Object>{
    return  this.http.post("http://localhost:8080/api/User",user);
   }

   /**********************************************Méthode pour obtient la liste des utilisateurs par ID************************/

   getUserById(id:number):Observable<User>{
    return this.http.get<User>(`http://localhost:8080/api/User/${id}`)
  }

   /***********************************************************Méthode pour modifier les cordonnées d'un utilisateur***************************/

   updateUser(idUser:number,user:User):Observable<Object>{
     return this.http.put(`http://localhost:8080/api/User/${idUser}`,user);
  }

  /************************************************************Méthode pour supprimer un tilisateur selon Id**************************/

   deleteUser(idUser:number):Observable<Object>{
     return this.http.delete(`http://localhost:8080/api/User/${idUser}`);

   }




}
