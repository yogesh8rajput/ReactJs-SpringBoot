package com.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.backend.entity.Products;

@Service
public interface P_Services {

	public Products add(Products products);
	
	public List<Products> getAll();
	
	public Products getOne(Integer product_id);
	
	public void delete(Integer product_id);
	
	public Products update(Products products);
}
