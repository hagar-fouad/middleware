package com.javainuse.dao;

import com.javainuse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javainuse.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	 User findByUsername(String username);
}
