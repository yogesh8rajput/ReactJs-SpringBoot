package com.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.backend.entity.Products;

public interface ProductRepository extends CrudRepository<Products, Integer>,JpaRepository<Products, Integer> {

	@Query("SELECT p from Products p WHERE "+
	"LOWER(p.product_name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR "
	+ "LOWER(p.product_Category) LIKE LOWER(CONCAT('%', :keyword, '%'))")
	List<Products> searchProducts(String keyword);

	

}
