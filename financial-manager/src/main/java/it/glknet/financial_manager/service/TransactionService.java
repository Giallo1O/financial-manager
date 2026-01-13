package it.glknet.financial_manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.glknet.financial_manager.model.Transaction;
import it.glknet.financial_manager.repository.TransactionRepository;

@Service
public class TransactionService {

	@Autowired
	private TransactionRepository repository;

	public void add(Transaction transaction) {
		repository.save(transaction);
	}

	public void update(Transaction transaction) {
		repository.save(transaction);
	}

	public void delete(String transactionId) {
		repository.deleteById(transactionId);
	}

	public Transaction read(String transactionId) {
		return repository.getReferenceById(transactionId);
	}

}
