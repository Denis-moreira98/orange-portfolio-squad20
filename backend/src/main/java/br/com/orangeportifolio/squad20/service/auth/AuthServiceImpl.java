package br.com.orangeportifolio.squad20.service.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.orangeportifolio.squad20.dao.IUserDAO;
import br.com.orangeportifolio.squad20.dto.LoginDTO;
import br.com.orangeportifolio.squad20.model.User;
import br.com.orangeportifolio.squad20.security.OrangeToken;
import br.com.orangeportifolio.squad20.security.TokenUtil;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Service
public class AuthServiceImpl implements IAuthService{
	
	@Autowired
	IUserDAO dao;

	@Override
	public OrangeToken authenticate(@Valid @NotNull LoginDTO user) {
		
		User res = dao.findByEmail(user.email());
		
		if(res != null) {
			
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			
			if(encoder.matches(user.password(), res.getPassword())) {
				OrangeToken token = TokenUtil.encode(res);
				return token;
			}
		}
		return null;
	}

}
