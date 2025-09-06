//package com.backend.services;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import com.backend.entity.User;
//import com.backend.repositories.UserRepository;
//import com.backend.entity.Principal;
//
//@Service
//public class MuUserDetailsService implements UserDetailsService {
//
//    private final UserRepository userRepository;
//    
//    public MuUserDetailsService(UserRepository userRepository) {
//    	this.userRepository  = userRepository;
//    }
//
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		 User user = userRepository.findByUsername(username);
//       
//////         If user is not found, throw exception
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with username: " + username);
//        }
//        
//////         Return a Principal object with the found user
//       
//        return new Principal(user);
//	}
//    
////    @Override
////    public UserDetails loadUserByUsername(String ) throws UsernameNotFoundException {
//////         Find the user by username from the repository
//////        Optional<User> userOpt = Optional.of(userRepository.findByUsername(username));
////        User user = userRepository.findByUser_email(username);
////       
//////         If user is not found, throw exception
////        if (user == null) {
////            throw new UsernameNotFoundException("User not found with username: " + username);
////        }
////        
//////         Return a Principal object with the found user
////       
////        return new Principal(user);
////    }
//}
