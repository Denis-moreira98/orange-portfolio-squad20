package br.com.orangeportifolio.squad20.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.orangeportifolio.squad20.dao.IUserDAO;
import br.com.orangeportifolio.squad20.model.User;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@Service
public class UserServiceImpl implements IUserService{
	
	@Autowired
	private IUserDAO dao;

	@Override
	public User create(@Valid User user) {
		
		if(dao.findByEmail(user.getEmail()) == null) {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String newPassword = encoder.encode(user.getPassword());
			user.setPassword(newPassword);
			
			return dao.save(user);
			
		}
		System.err.println("Usuário já existe no banco de dados!");
		return null;
	}

	@Override
	public User findById(@NotNull Integer id) {
		return dao.findById(id).orElse(null);
	}
}
