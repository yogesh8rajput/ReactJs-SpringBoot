package com.backend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.backend.entity.User;
import java.util.List;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
  //to find the user by its username
	User findByUsername(String username);

}
