package br.com.orangeportifolio.squad20.controller;

import java.util.Enumeration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.dto.UserDTO;
import br.com.orangeportifolio.squad20.model.User;
import br.com.orangeportifolio.squad20.service.user.IUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService service;
    
	@Operation(description = "Criar um novo usuário")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Usuário criado com sucesso"),
		@ApiResponse(responseCode = "403", description = "Usuário já existe no banco de dados")
	})
	@PostMapping("/new")
	public ResponseEntity<?> create(@RequestBody @Valid @NotNull User user, HttpServletRequest request) {
	
		if(service.create(user) != null) {
			return ResponseEntity.ok().body("Usuário criado com sucesso!");
		}
		return ResponseEntity.status(403).body("ERRO! Usuário já existe no Banco de Dados!");
	}
	@Operation(description = "Buscar todos os projetos do usuário")
	@ApiResponse(responseCode = "200", description = "Projetos encontrado com sucesso")
	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable @NotNull @Positive Integer id){
		User res = service.findById(id);
		if (res != null) {
			return ResponseEntity.ok(UserDTO.fromUser(res));
		}
		return ResponseEntity.notFound().build();
	}
}
