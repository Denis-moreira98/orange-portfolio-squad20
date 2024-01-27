package br.com.orangeportifolio.squad20.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.model.User;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/auth")
public class AuthController {

	@PostMapping("/login")
	public ResponseEntity<User> login(){
		return null;
	}
}
