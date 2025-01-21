package com.backend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;

=======
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
>>>>>>> 3413e5eeb310797dcbdcb0cede4912f6bad294b5
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;
import com.backend.services.P_Services;

@RestController
@RequestMapping("/products")
@CrossOrigin("http://localhost:5173")
public class MyControl {

    @Autowired
    private P_Services p_Services;

    public MyControl(P_Services p_Services) {
        this.p_Services = p_Services;
    }

    // -------------------- Adding Product --------------------
    @PostMapping("/add")
    public ResponseEntity<Products> add(@RequestPart("product") Products products, 
                                        @RequestPart("imageFile") MultipartFile imageFile) throws IOException {
        Products addedProduct = p_Services.add(products, imageFile);
        return new ResponseEntity<>(addedProduct, HttpStatus.CREATED);
    }

    // -------------------- Show all Products --------------------
    @GetMapping
    public List<Products> getAll() {
        return p_Services.getAll();
    }

    // -------------------- Get one Product --------------------
    @GetMapping("/{product_id}")
    public ResponseEntity<Products> getOne(@PathVariable Integer product_id) {
        try {
            Products product = p_Services.getOne(product_id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

<<<<<<< HEAD
    // -------------------- Delete Product --------------------
    @DeleteMapping("/{product_id}")
    public ResponseEntity<Void> delete(@PathVariable Integer product_id) {
        try {
            p_Services.delete(product_id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
=======
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
>>>>>>> 3413e5eeb310797dcbdcb0cede4912f6bad294b5

    // -------------------- Update Product --------------------
    @PutMapping("/update/{product_id}")
    public ResponseEntity<Products> update(@RequestPart("product") Products products, 
                                            @PathVariable Integer product_id, 
                                            @RequestPart("imageFile") MultipartFile imageFile) throws IOException {
        try {
            Products updatedProduct = p_Services.update(products, product_id, imageFile);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // -------------------- Getting image by Product Id --------------------
    @GetMapping("/{product_id}/image")
    public ResponseEntity<byte[]> getImageById(@PathVariable Integer product_id) {
        try {
            byte[] image = p_Services.getImageById(product_id);
            return new ResponseEntity<>(image, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
