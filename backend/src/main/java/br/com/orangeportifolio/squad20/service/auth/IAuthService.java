package br.com.orangeportifolio.squad20.service.auth;

import br.com.orangeportifolio.squad20.dto.AuthDTO;
import br.com.orangeportifolio.squad20.dto.LoginDTO;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public interface IAuthService {
	
	public AuthDTO authenticate(@Valid @NotNull LoginDTO dataLogin);
}
