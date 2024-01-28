package br.com.orangeportifolio.squad20.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.orangeportifolio.squad20.dao.IUserDAO;
import br.com.orangeportifolio.squad20.dto.UserDTO;
import br.com.orangeportifolio.squad20.model.User;
import br.com.orangeportifolio.squad20.security.OrangeToken;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Service
public class AuthServiceImpl implements IAuthService{
	
	@Autowired
	IUserDAO dao;

	@Override
	public OrangeToken login(@Valid @NotNull UserDTO dataLogin) {
		User res = dao.findByEmail(dataLogin.getEmail());
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		if(res != null) {
			if(encoder.matches(dataLogin.getPassword(), res.getPassword())) {
				return new  OrangeToken("*squad-20*");
			}
		}
		return null;
	}

}
