package br.com.orangeportifolio.squad20.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.dto.AuthDTO;
import br.com.orangeportifolio.squad20.dto.LoginDTO;
import br.com.orangeportifolio.squad20.service.auth.IAuthService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	IAuthService service;

	@PostMapping("/login")
	public ResponseEntity<AuthDTO> authenticate(@RequestBody @Valid @NotNull LoginDTO user){
		
		AuthDTO auth = service.authenticate(user);
		
		if(auth != null) {
			return ResponseEntity.ok(auth);
		}else {
			return ResponseEntity.status(401).build();
		}
	}
}
