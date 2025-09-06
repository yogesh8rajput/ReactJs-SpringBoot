package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.User;
import com.backend.entity.Users;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
  //to find the user by its username
//	User findByUsername(String username);
	 Optional<Users> findByEmail(String email);

}
