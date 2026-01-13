package it.glknet.financial_manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.glknet.financial_manager.model.User;
import it.glknet.financial_manager.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public User getUser(String id) {
		return userRepository.getReferenceById(id);
	}

	public boolean addUser(User user) {
		try {
			return userRepository.save(user) != null;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}

	public boolean deleteUser(String id) throws Exception {
		try {
			userRepository.delete(userRepository.findById(id).get());
		} catch (Exception e) {
			return false;
		}

		return true;
	}

}
