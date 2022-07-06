package com.isi.projet.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity()
@Table(name="User")
public class User {
        @Id()
        @GeneratedValue(strategy=GenerationType.AUTO)
	       private Integer idUser;
        @Column(name="nomUser")
	       private String nom;
        @Column(name="TypeUser") 
           private String type;
        @Column(name="email")
	       private String email;
        @Column(name="fonction")
	       private String fonction;
        @Column(name="Télephone")
	       private String tel;
        @Column(name="password")
	       private String password;
		public User() {
			super();
			// TODO Auto-generated constructor stub
		}
		public User(String nom, String type, String email, String fonction, String tel, String password) {
			super();
			this.nom = nom;
			this.type = type;
			this.email = email;
			this.fonction = fonction;
			this.tel = tel;
			this.password = password;
		}
		public Integer getIdUser() {
			return idUser;
		}
		public void setIdUser(Integer idUser) {
			this.idUser = idUser;
		}
		public String getNom() {
			return nom;
		}
		public void setNom(String nom) {
			this.nom = nom;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getFonction() {
			return fonction;
		}
		public void setFonction(String fonction) {
			this.fonction = fonction;
		}
		public String getTel() {
			return tel;
		}
		public void setTel(String tel) {
			this.tel = tel;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@Override
		public String toString() {
			return "User [idUser=" + idUser + ", nom=" + nom + ", type=" + type + ", email=" + email + ", fonction="
					+ fonction + ", tel=" + tel + ", password=" + password + "]";
		}
	
	        
	
}
