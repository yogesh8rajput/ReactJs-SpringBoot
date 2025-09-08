package com.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.entity.Customer;
import com.backend.repositories.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepo;

	public Customer newCustomer(Customer cust) {
			return customerRepo.save(cust);
		
	}

	public void delete(Integer id) {
		customerRepo.deleteById(id);
	}

	public List<Customer> getAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
	}

}
