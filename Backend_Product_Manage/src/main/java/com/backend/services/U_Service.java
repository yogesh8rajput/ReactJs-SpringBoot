package com.backend.services;

import java.io.IOException;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.multipart.MultipartFile;

import com.backend.entity.LoginRequest;
import com.backend.entity.Products;
import com.backend.entity.Users;
import com.backend.repositories.ProductRepository;
import com.backend.repositories.UserRepository;

//@Service
//public class U_Service {
//	
//	private final BCryptPasswordEncoder bCryptPasswordEncoder;
//	@Autowired
//	private UserRepository userRepository;
//	
////	<!--================================jwt==============================-->
//	@Autowired
//	AuthenticationManager authenticationManager;
//	
//	@Autowired
//	JWTservice jwTservice;
//	
////	<!--==============================================================-->
//	
//	
//	public U_Service(UserRepository userRepository,BCryptPasswordEncoder bCryptPasswordEncoder, BCryptPasswordEncoder bCryptPasswordEncoder1) {
//		this.userRepository= userRepository;
//		this.bCryptPasswordEncoder=bCryptPasswordEncoder1;
//	}
//
//	public User add(User user)  {
//		user.setPasswordhash(bCryptPasswordEncoder.encode(user.getPassword()));
//		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
//		return userRepository.save(user);
//	}
//
//
//
//
//
////	------------------------Fetch the user count-------------------------------------
//
//	 public long getUserCount() {
//	        return userRepository.count();
//	    }
//	
////	-------------------------For Login Authentication-------------------------------------
//	
//	public boolean authenticate(String username,String password) {
//		User user = userRepository.findByUsername(username);
//		
//		if(!user.getUsername().equals(username)) {
//			throw new UsernameNotFoundException("User doesn't exist in the database");
//		}
//		
//		if (!bCryptPasswordEncoder.matches(password, user.getPasswordhash())) {
//            throw  new BadCredentialsException("The password is incorrect");
//        }
//		
//		return true;
//	}
////	
////	<!--==============================================================-->
//	
////	<!--=============================with jwt =================================-->
//	
//	public String verify(User user) {
//		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
//		if(authentication.isAuthenticated()){
//			return jwTservice.generateTokens(user.getUsername());
//		}
//		return "fail";
//	}
//	
////	<!--==============================================================-->
//	
//
//}


@Service
public class U_Service implements UserDetailsService {
     @Autowired
    private UserRepository userRepo;
     @Autowired
 	JWTservice jwTservice;
     
    public Users register(Users req) {
        Users user = new Users();
        user.setName(req.getName());
        user.setCity(req.getCity());
        user.setEmail(req.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(req.getPassword()));
        user.setRole(req.getRole());
        return userRepo.save(user);
    }

    public String authenticate(LoginRequest req) {
        Users user = userRepo.findByEmail(req.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        if (!new BCryptPasswordEncoder().matches(req.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Invalid credentials");
        }

//        return new JwtUtil().generateToken(user);
        return jwTservice.generateTokens(user.getEmail());
//        return "success";
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepo.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        if (user.getRole() == null) {
            throw new IllegalStateException("User has no role assigned");
        }
        return new org.springframework.security.core.userdetails.User(
            user.getEmail(),
            user.getPassword(),
            List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().name()))
        );
    }
    

////------------------------Fetch the user count-------------------------------------
//
 public long getUserCount() {
        return userRepo.count();
    }
///

	public List<Users> getAll() {
		return (List<Users>)userRepo.findAll();
	}
	
	public Users getOne(Integer id) {
		Optional<Users> op = userRepo.findById(id);
		return op.get();
	}

	public void delete(Integer id) {
		userRepo.deleteById(id);
	}

}

