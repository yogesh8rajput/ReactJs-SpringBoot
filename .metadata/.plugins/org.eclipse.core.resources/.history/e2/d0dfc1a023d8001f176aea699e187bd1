package com.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;
import com.backend.services.P_Services;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:5173")
public class MyControl {

//	@GetMapping("/")
//	@ResponseBody
//	public String index() {
//		return "hello";
//	}

	
	@Autowired
	P_Services p_Services;
	
	public MyControl(P_Services p_Services) {
		this.p_Services = p_Services;
	}
//	--------------------Adding Product--------------------
	@PostMapping("/add")
	public Products add(@RequestPart("product") Products products,@RequestPart("imageFile") MultipartFile imageFile) throws IOException {
		
			return p_Services.add(products,imageFile);
		}
	
//	--------------------Show all Product--------------------

	@GetMapping
	public List<Products> getAll() {
		return p_Services.getAll();
	}
	
//	--------------------Get by id one Product--------------------

	@GetMapping("/{product_id}")
	public Products getOne(@PathVariable Integer product_id) {
		return p_Services.getOne(product_id);
	}
	
	
//	--------------------Delete Product--------------------

	@DeleteMapping("/{product_id}")
	public void delete(@PathVariable Integer product_id) {
		 p_Services.delete(product_id);
	}
	
//	--------------------Update Product--------------------

//	@PostMapping("/update/{product_id}")
//	public Products update( @PathVariable Integer product_id,@RequestPart("product") Products products,@RequestPart("imageFile") MultipartFile imageFile) throws IOException{
//		return p_Services.update(product_id,products,imageFile);
//	}
	
//	@PostMapping("/update")
//	public Products update(@RequestParam("product") Products products, @RequestParam("imageFile") MultipartFile imageFile) throws IOException{
//		return p_Services.update(products,imageFile);
//	}
	
	@PutMapping("/update")
	public Products update(@RequestBody Products products) {
		return p_Services.update(products);
	}
	
	
//	--------------------Getting image by Product Id--------------------
	
	@GetMapping("/{product_id}/image")
	public byte[] getImageById(@PathVariable Integer product_id){
		
		return p_Services.getImageById(product_id);
		
		
	}

}