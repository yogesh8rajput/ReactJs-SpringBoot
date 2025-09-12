package com.backend.controller;

//import java.beans.JavaBean;
//import java.io.IOException;
import java.util.List;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.AuthResponse;
import com.backend.entity.LoginRequest;
import com.backend.entity.Role;
import com.backend.entity.Users;
import com.backend.repositories.UserRepository;
import com.backend.services.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:5173")
public class UserControl {

	
	@Autowired
	private UserService u_Service;
	@Autowired
	private UserRepository userRepository;
	
////	--------------------Show all User--------------------
//
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping
	public List<Users> getAll() {
		return u_Service.getAll();
	}
//	
////	--------------------Get by id one User--------------------
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/{id}")
	public Users getOne(@PathVariable Integer id) {
		return u_Service.getOne(id);
	}
//	
//	
////	--------------------Delete User--------------------
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		 u_Service.delete(id);
	}
//
//
//	
////	--------------------Update User--------------------
	@PreAuthorize("hasRole('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody Users user) {
		u_Service.updateUser(id,user);
		return ResponseEntity.ok("Updated successfully!");
	}
//
//
////	------------------------Fetch the user count-------------------------------------
//
	@PreAuthorize("hasRole('ADMIN')")
	 @GetMapping("/count")
	    public long getUserCount() {
	        return u_Service.getUserCount();
	    }
	
////	--------------------Registration of User--------------------
//	

	    @PostMapping("/register")
	    public ResponseEntity<?> register(@RequestBody Users request) {
	        u_Service.register(request);
	        return ResponseEntity.ok("User registered successfully");
	    }
////	--------------------Login of User--------------------

	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
	        String token = u_Service.authenticate(request);
	        return ResponseEntity.ok(new AuthResponse(token));
	    }

}
