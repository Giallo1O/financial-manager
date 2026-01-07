package it.glknet.financial_manager.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import it.glknet.financial_manager.model.User;

public interface UserRepository extends JpaRepository<User, String> {
	
	Optional<User> findByEmail(String email);
	
	boolean existsByEmail(String email);

}
