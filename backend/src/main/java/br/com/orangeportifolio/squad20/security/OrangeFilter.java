package br.com.orangeportifolio.squad20.security;

import java.io.IOException;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class OrangeFilter extends OncePerRequestFilter{

	@Override
	protected void doFilterInternal(HttpServletRequest request, 
									HttpServletResponse response, 
									FilterChain filterChain) throws ServletException, IOException {
		
		System.out.println("Requisição passou pelo filtro");
		
		if(request.getHeader("Authorization") != null) {
			Authentication auth = TokenUtil.decode(request);
		}
		
		//Encaminhando a requisição para frente
		filterChain.doFilter(request, response);

	}
}
