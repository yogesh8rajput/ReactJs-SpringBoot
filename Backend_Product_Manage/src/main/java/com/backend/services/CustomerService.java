package com.backend.services;

import java.util.List;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.backend.entity.Customer;
import com.backend.entity.Users;
import com.backend.repositories.CustomerRepository;
import com.backend.repositories.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private ObjectMapper objectMapper;

	public Customer newCustomer(Customer cust, Authentication authentication) {
		String email = authentication.getName();
		Users currentUser = userRepo.findByEmail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));

		cust.setCreatedBy(currentUser);
		return customerRepo.save(cust);

	}

	public void delete(Integer id) {
		customerRepo.deleteById(id);
	}

	public List<Customer> getAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
	}

	public Customer getCustomerById(Integer id) {

		return customerRepo.findById(id).get();
	}

	public Customer updateCustomer(Integer id, Customer client) {

		Customer customer = customerRepo.findById(id).get();
		
		if(client.getName()!=null)
		customer.setName(client.getName());
		if(client.getIndustry()!=null)
		customer.setIndustry(client.getIndustry());
		if(client.getCompany()!=null)
		customer.setCompany(client.getCompany());
		if(client.getContact()!=null)
			customer.setContact(client.getContact());
		
		
		
		return customerRepo.save(customer);
	}

}
