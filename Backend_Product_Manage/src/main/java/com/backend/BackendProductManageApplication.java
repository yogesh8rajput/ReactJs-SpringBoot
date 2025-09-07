package com.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

@SpringBootApplication
@EnableMethodSecurity
public class BackendProductManageApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendProductManageApplication.class, args);
		System.out.println("Welcome to Product Management System.");
	}

}
