package br.com.orangeportifolio.squad20.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.orangeportifolio.squad20.model.User;

public interface IUserDAO extends JpaRepository<User, Integer>{
	public User findByEmail(String login);
}
