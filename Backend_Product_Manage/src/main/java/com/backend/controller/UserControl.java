package com.backend.controller;

//import java.beans.JavaBean;
//import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.LoginRequest;
//import com.backend.entity.Products;
import com.backend.entity.User;
//import com.backend.services.P_Services;
import com.backend.services.U_Service;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
public class UserControl {

	
	@Autowired
	private U_Service u_Service;
	
	public UserControl(U_Service u_Service) {
		this.u_Service = u_Service;
	}
//	--------------------Adding User--------------------
	@PostMapping("/register")
	public User add(@RequestBody User user) {
		
			return u_Service.add(user);
		}
	
//	--------------------Show all User--------------------

	@GetMapping
	public List<User> getAll() {
		return u_Service.getAll();
	}
	
//	--------------------Get by id one User--------------------

	@GetMapping("/{id}")
	public User getOne(@PathVariable Integer id) {
		return u_Service.getOne(id);
	}
	
	
//	--------------------Delete User--------------------

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		 u_Service.delete(id);
	}

	
//	--------------------Login of User--------------------

//	@PostMapping("/login")
//	public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest , HttpSession session) {
//		
//		try {
//			
//			boolean isauthenticated = u_Service.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
//			
//			if(isauthenticated) {
//				session.setAttribute("user", loginRequest.getUsername());
//				return ResponseEntity.ok("Login Successful!");
//			}
//			else {
//				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid name or password");
//
//			}
//		} 
//			catch (Exception e) {
//
//		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occured");
//}
//	}
//	
	
	
//	<!--=====================JWT========================================-->
	
	@PostMapping("/login2")
	public String verify(@RequestBody User user) {
		return u_Service.verify(user);
	}
//	<!--==============================================================-->
	
	
}
