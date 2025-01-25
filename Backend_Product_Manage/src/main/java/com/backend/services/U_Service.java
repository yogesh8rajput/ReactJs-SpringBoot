package com.backend.services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;
import com.backend.entity.User;
import com.backend.repositories.ProductRepository;
import com.backend.repositories.UserRepository;

@Service
public class U_Service {
	
	@Autowired
	private UserRepository userRepository;
	
	
	public U_Service(UserRepository userRepository) {
		this.userRepository= userRepository;
	}

	public User add(User user)  {
//		products.setImage_name(imageFile.getOriginalFilename());
//		user.setImage_type(imageFile.getContentType());
//		user.setImage_data(imageFile.getBytes());
		return userRepository.save(user);
	}

	public List<User> getAll() {
		return (List<User>)userRepository.findAll();
	}

	public User getOne(Integer id) {
		Optional<User> op = userRepository.findById(id);
		return op.get();
	}

	public void delete(Integer id) {
		userRepository.deleteById(id);
	}



}
