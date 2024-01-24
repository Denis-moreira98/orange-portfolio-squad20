package br.com.orangeportifolio.squad20.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.orangeportifolio.squad20.dao.IUsersDAO;
import br.com.orangeportifolio.squad20.model.User;
import jakarta.validation.Valid;

@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private IUsersDAO dao;

	@Override
	public User create(@Valid User user) {
		return dao.save(user);
	}
}
