package br.com.orangeportifolio.squad20.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping("/user")
public class UserController {

    //Injeção de dependência para instanciar
    @Autowired
    private IUserService userService;
    
	@PostMapping
	public ResponseEntity<User> create(@RequestBody @Valid @NotNull User user) {
		if(userService.create(user) != null) {
			return ResponseEntity.ok(user);
		}
		return ResponseEntity.badRequest().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findById(@PathVariable @NotNull Integer id){
		User res = userService.findById(id);
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();
	}
	
}
