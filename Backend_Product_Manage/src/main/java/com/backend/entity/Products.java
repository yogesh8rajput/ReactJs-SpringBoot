package com.backend.entity;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Products {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer product_id;
	private String product_name;
	private String product_desc;
	private String product_brand;
	private BigDecimal product_price;
	private String product_Category;
	private Integer product_quantity;
	private Boolean product_status;
	private Date release_date;
	
	
	
	
//==================================Getters & Setters=================================================
	
	
	
	
	public Integer getProduct_id() {
		return product_id;
	}
	public void setProduct_id(Integer product_id) {
		this.product_id = product_id;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public String getProduct_desc() {
		return product_desc;
	}
	public void setProduct_desc(String product_desc) {
		this.product_desc = product_desc;
	}
	public String getProduct_brand() {
		return product_brand;
	}
	public void setProduct_brand(String product_brand) {
		this.product_brand = product_brand;
	}
	public BigDecimal getProduct_price() {
		return product_price;
	}
	public void setProduct_price(BigDecimal product_price) {
		this.product_price = product_price;
	}
	public String getProduct_Category() {
		return product_Category;
	}
	public void setProduct_Category(String product_Category) {
		this.product_Category = product_Category;
	}
	public Integer getProduct_quantity() {
		return product_quantity;
	}
	public void setProduct_quantity(Integer product_quantity) {
		this.product_quantity = product_quantity;
	}
	public Boolean getProduct_status() {
		return product_status;
	}
	public void setProduct_status(Boolean product_status) {
		this.product_status = product_status;
	}
	public Date getRelease_date() {
		return release_date;
	}
	public void setRelease_date(Date release_date) {
		this.release_date = release_date;
	}
	

}
