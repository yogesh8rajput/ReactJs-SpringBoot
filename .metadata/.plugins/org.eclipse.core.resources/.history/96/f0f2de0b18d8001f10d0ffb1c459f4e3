package com.backend.services;

import java.io.IOException;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;
import com.backend.repositories.ProductRepository;

@ Service
public class P_ServiceImplement implements P_Services{
	
	@Autowired
	ProductRepository productRepository;
	
	public P_ServiceImplement(ProductRepository productRepository) {
		this.productRepository= productRepository;
	}

	@Override
	public Products add(Products products, MultipartFile imageFile) throws IOException  {
		products.setImage_name(imageFile.getOriginalFilename());
		products.setImage_type(imageFile.getContentType());
		products.setImage_data(imageFile.getBytes());
		return productRepository.save(products);
	}

	@Override
	public List<Products> getAll() {
		return (List<Products>)productRepository.findAll();
	}

	@Override
	public Products getOne(Integer product_id) {
		Optional<Products> op = productRepository.findById(product_id);
		return op.get();
	}

	@Override
	public void delete(Integer product_id) {
		productRepository.deleteById(product_id);
	}

	@Override
	public Products update(Products products,Integer product_id,MultipartFile imageFile) throws IOException {
		 Optional<Products> op = productRepository.findById(product_id);
		    if (op.isPresent()) {
		        Products pro = op.get();
		        
		        // Check each field for non-null and update accordingly
		        if (products.getProduct_name() != null) {
		            pro.setProduct_name(products.getProduct_name());
		        }
		        if (products.getProduct_desc() != null) {
		            pro.setProduct_desc(products.getProduct_desc());
		        }
		        if (products.getProduct_brand() != null) {
		            pro.setProduct_brand(products.getProduct_brand());
		        }
		        if (products.getProduct_price() != null) {
		            pro.setProduct_price(products.getProduct_price());
		        }
		        if (products.getProduct_Category() != null) {
		            pro.setProduct_Category(products.getProduct_Category());
		        }
		        if (products.getProduct_quantity() != null) {
		            pro.setProduct_quantity(products.getProduct_quantity());
		        }
		        if (products.getProduct_status() != null) {
		            pro.setProduct_status(products.getProduct_status());
		        }
		        if (imageFile != null && !imageFile.isEmpty()) {
		        	pro.setImage_name(imageFile.getOriginalFilename());
		            pro.setImage_data(imageFile.getBytes());
		            pro.setImage_type(imageFile.getContentType());
		        }
		        
		        return productRepository.save(pro);
		    } else {
		        throw new RuntimeException("Product not found with id: " + product_id);
		    }
		
	}

	@Override
	public byte[] getImageById(Integer product_id) {

		Optional<Products> op = productRepository.findById(product_id);
		Products pro = op.get();
		byte[] imageFile = pro.getImage_data();
		
		return imageFile;
	}

}
