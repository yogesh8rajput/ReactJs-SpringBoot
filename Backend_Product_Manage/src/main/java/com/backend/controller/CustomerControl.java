package com.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.entity.Customer;
import com.backend.entity.Users;
import com.backend.repositories.CustomerRepository;
import com.backend.repositories.UserRepository;
import com.backend.services.CustomerService;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/customer")
public class CustomerControl {
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private UserRepository userRepo;
	
	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@GetMapping
	public List<Customer> getAllCustomer() {
		return customerService.getAllCustomer();
	}
//	
//	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
//@GetMapping("/{id}")
//	public ResponseEntity<Customer>  getCustomerById(@RequestParam Integer id) {
//		return customerService.getCustomerById();
//	}
	
	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@PostMapping("/register")
	public ResponseEntity<?> postNewCustomer(@RequestBody Customer cust,Authentication authentication) {
		

	    String email = authentication.getName(); 
	    Users currentUser = userRepo.findByEmail(email)
	            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

	    cust.setCreatedBy(currentUser);
		customerService.newCustomer(cust);
		return ResponseEntity.ok("Customer Registration success!");

	}
	
	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
@PutMapping("/{id}")
	public String updateCustomer(@PathVariable Integer id, @RequestBody String entity) {
		//TODO: process PUT request
		
		return entity;
	}
	
	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable Integer id) {
		customerService.delete(id);
		return ResponseEntity.ok("Customer " +id+" Deleted");
	}

}
