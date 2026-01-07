package it.glknet.financial_manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import it.glknet.financial_manager.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, String> {

//	List<Transaction> findByUserId(String userId);
	
//	Optional<Transaction> findByDateAndUser(String date, User user);
	
}
