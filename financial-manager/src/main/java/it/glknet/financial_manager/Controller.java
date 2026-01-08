package it.glknet.financial_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.glknet.financial_manager.model.User;
import it.glknet.financial_manager.service.UserService;

@RestController
@RequestMapping("/api")
public class Controller {

	@Autowired
	private UserService userService;

	@GetMapping("/init")
	public void initController() {
		System.out.println("Test Init");
	}

	@PostMapping("/create-user")
	public void createUser(@RequestParam("email") String email, @RequestParam("password") String password) {
		User usr = new User();
		usr.setEmail(email);
		usr.setPassword(password);
//		userService.addUser(usr);
		userService.addUser(new User("", "", "", "", "", email, password, null));
	}

}
