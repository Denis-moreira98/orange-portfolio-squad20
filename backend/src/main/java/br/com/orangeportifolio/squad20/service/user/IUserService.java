package br.com.orangeportifolio.squad20.service.user;

import br.com.orangeportifolio.squad20.model.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

public interface IUserService {
	public User create(@Valid User user);
	public User findById(@NotNull Integer id);
}
