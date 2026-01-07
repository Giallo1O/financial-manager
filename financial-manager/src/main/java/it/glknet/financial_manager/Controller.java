package it.glknet.financial_manager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import it.glknet.financial_manager.service.UserService;

@RestController
public class Controller {

	@Autowired
	private UserService userService;

}
