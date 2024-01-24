package br.com.orangeportifolio.squad20.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.model.User;
import br.com.orangeportifolio.squad20.repositories.UserRepository;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    //Injeção de dependência para instanciar
    @Autowired
    private UserRepository repository;
    
    //Get User pelo ID
	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
    //Salva um usuário
	@PostMapping
	public User insert(@RequestBody User user) {
		return repository.save(user);
	}
}
