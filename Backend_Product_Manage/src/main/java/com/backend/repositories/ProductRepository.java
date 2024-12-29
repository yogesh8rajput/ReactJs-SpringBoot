package com.backend.repositories;

import org.springframework.data.repository.CrudRepository;

import com.backend.entity.Products;

public interface ProductRepository extends CrudRepository<Products, Integer> {

}
