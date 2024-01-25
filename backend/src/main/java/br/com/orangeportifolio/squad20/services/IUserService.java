package br.com.orangeportifolio.squad20.services;

import br.com.orangeportifolio.squad20.model.User;

public interface IUserService {
	public User create(User user);
	public User findById(Integer id);
}
