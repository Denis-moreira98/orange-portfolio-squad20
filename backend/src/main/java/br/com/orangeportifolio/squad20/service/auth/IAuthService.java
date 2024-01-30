package br.com.orangeportifolio.squad20.service.auth;

import br.com.orangeportifolio.squad20.dto.LoginDTO;
import br.com.orangeportifolio.squad20.security.OrangeToken;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public interface IAuthService {
	
	public OrangeToken authenticate(@Valid @NotNull LoginDTO dataLogin);
}
