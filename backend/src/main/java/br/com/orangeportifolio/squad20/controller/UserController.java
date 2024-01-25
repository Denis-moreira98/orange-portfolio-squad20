package br.com.orangeportifolio.squad20.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.dao.IUsersDAO;
import br.com.orangeportifolio.squad20.model.User;
import br.com.orangeportifolio.squad20.services.IUserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@RequestMapping(value = "/user")
public class UserController {

    //Injeção de dependência para instanciar
    @Autowired
    private IUserService userService;
    
	@PostMapping
	public ResponseEntity<User> create(@RequestBody @Valid @NotNull User user) {

		return
		
	}
}
