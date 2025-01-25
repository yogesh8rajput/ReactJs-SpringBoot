package com.backend.controller;

//import java.beans.JavaBean;
//import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;

//import com.backend.entity.Products;
import com.backend.entity.User;
//import com.backend.services.P_Services;
import com.backend.services.U_Service;

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
}
