package com.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.entity.Customer;
import com.backend.entity.LoginRequest;
import com.backend.entity.Users;
import com.backend.repositories.UserRepository;




@Service
public class UserService implements UserDetailsService {
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

        return jwTservice.generateTokens(user.getEmail());
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
////---------------------------------------------------------------------------------

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

	public Users updateUser(Integer id, Users user) {
	
Users existingUser = userRepo.findById(id).get();
		
		if(user.getName()!=null)
		existingUser.setName(user.getName());
		if(user.getCity()!=null)
		existingUser.setCity(user.getCity());
		if(user.getRole()!=null)
		existingUser.setRole(user.getRole());
		
		
		
		return userRepo.save(existingUser);
	
		
	}

}

