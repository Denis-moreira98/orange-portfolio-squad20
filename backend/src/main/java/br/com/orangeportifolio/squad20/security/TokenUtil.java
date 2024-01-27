package br.com.orangeportifolio.squad20.security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

public class TokenUtil {
	
	public static Authentication decode(HttpServletRequest request) throws ServletException, IOException{
		System.out.println("Recebida requisição na classe TokenUtil = " + request.getHeader("Authorization"));
		if(request.getHeader("Authorization").equals("Bearer 1234567890")) {
			System.out.println("Cabeçalho, ok!");
			return new UsernamePasswordAuthenticationToken("user", null,  Collections.emptyList());
		}
		
		return null;
	}
}
