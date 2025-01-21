package com.backend.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;

public interface P_Services {

    Products add(Products products, MultipartFile imageFile) throws IOException;
    
    List<Products> getAll();
    
    Products getOne(Integer product_id);
    
    void delete(Integer product_id);
    
    Products update(Products products, Integer product_id, MultipartFile imageFile) throws IOException;
    
    byte[] getImageById(Integer product_id);
}
