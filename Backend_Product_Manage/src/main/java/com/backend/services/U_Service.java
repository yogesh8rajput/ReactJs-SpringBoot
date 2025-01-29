package com.backend.services;

import java.io.IOException;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.Products;
import com.backend.entity.User;
import com.backend.repositories.ProductRepository;
import com.backend.repositories.UserRepository;

@Service
public class U_Service {
	
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	@Autowired
	private UserRepository userRepository;
	
	
	public U_Service(UserRepository userRepository,BCryptPasswordEncoder bCryptPasswordEncoder, BCryptPasswordEncoder bCryptPasswordEncoder1) {
		this.userRepository= userRepository;
		this.bCryptPasswordEncoder=bCryptPasswordEncoder1;
	}

	public User add(User user)  {
//		products.setImage_name(imageFile.getOriginalFilename());
//		user.setImage_type(imageFile.getContentType());
//		user.setImage_data(imageFile.getBytes());
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
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
	
//	-------------------------For Login Authentication-------------------------------------
	
	public boolean authenticate(String username,String password) {
		User user = userRepository.findByUsername(username);
		
		if(!user.getUsername().equals(username)) {
			throw new UsernameNotFoundException("User doesn't exist in the database");
		}
		
		if (!bCryptPasswordEncoder.matches(password, user.getPasswordhash())) {
            throw  new BadCredentialsException("The password is incorrect");
        }
		
		return true;
	}

}
