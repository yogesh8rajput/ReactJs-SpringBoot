package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{


}
