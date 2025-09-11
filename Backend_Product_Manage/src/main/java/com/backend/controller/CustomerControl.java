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

	
	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@GetMapping
	public List<Customer> getAllCustomer() {
		return customerService.getAllCustomer();
	}

	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@GetMapping("/{id}")
	public ResponseEntity<?> getCustomerById(@PathVariable Integer id) {
		Customer customer = customerService.getCustomerById(id);

		return ResponseEntity.ok(customer);

	}

	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@PostMapping("/register")
	public ResponseEntity<?> postNewCustomer(@RequestBody Customer cust, Authentication authentication) {

		
		customerService.newCustomer(cust,authentication);
		return ResponseEntity.ok("Customer Registration success!");

	}

	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@PutMapping("/{id}")
	public ResponseEntity<?> updateCustomer(@PathVariable Integer id, @RequestBody Customer client) {
		customerService.updateCustomer(id,client);

		return ResponseEntity.ok("Customer Updation success!");

	}

	@PreAuthorize("hasAnyRole('ADMIN','SALES')")
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteCustomer(@PathVariable Integer id) {
		customerService.delete(id);
		return ResponseEntity.ok("Customer " + id + " Deleted");
	}

}
