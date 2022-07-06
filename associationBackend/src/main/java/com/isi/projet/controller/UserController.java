package com.isi.projet.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isi.projet.entity.User;
import com.isi.projet.exception.ResourceNotFoundException;
import com.isi.projet.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	/*************************Méthode pour afficher la liste des utilisateurs****************/
	@GetMapping("/User")
	@CrossOrigin("http://localhost:4200/")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	/*************************Méthode pour afficher la liste des utilisateurs by Id****************/
	@GetMapping("/User/{id}")
	@CrossOrigin("http://localhost:4200/")
	public ResponseEntity<User> getUserByID(@PathVariable Integer id){
		User user=userRepository.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
		return ResponseEntity.ok(user);
	}
	/************************Méthode pour ajouter un nouveu utilisateur**********************/
	@PostMapping("/User")
	@CrossOrigin("http://localhost:4200/")
	public User addUser(@RequestBody User user) {
		 return userRepository.save(user);
	}
	/************************Méthode pour modifer un utilisateur selon l'id******************/
	@PutMapping("/User/{id}")
	@CrossOrigin("http://localhost:4200/")
	public ResponseEntity<User> updateUser(@PathVariable Integer id,@RequestBody User userDetails){
		User user = userRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
		user.setNom(userDetails.getNom());
		user.setFonction(userDetails.getFonction());
		user.setEmail(userDetails.getEmail());
		user.setTel(userDetails.getTel());
		user.setType(userDetails.getType());
		User updateUser=userRepository.save(user);
		return ResponseEntity.ok(updateUser);
		
	}
	
	/*********************************************Suppression d'un utilisateur****************************************/
	@CrossOrigin("http://localhost:4200/")
	@DeleteMapping("/User/{id}")
	public ResponseEntity <Map<String,Boolean>>deleteUser(@PathVariable Integer id) {
		User user=userRepository.findById(id)
	    .orElseThrow(()->new ResourceNotFoundException("User not exist with id:"+id));
	      userRepository.delete(user);
	      Map<String,Boolean>response=new HashMap();
	      response.put("deleted",Boolean.TRUE);
	      return ResponseEntity.ok(response);
	}
	
	
	

}
