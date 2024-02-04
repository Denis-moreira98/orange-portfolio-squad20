package br.com.orangeportifolio.squad20.security;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class OrangeFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		// Log para ler o cabeçalho:
//		String authorizationHeader = request.getHeader("Authorization");
//		System.err.println("Authorization Header(Orange Filter): " + authorizationHeader);
//		System.out.println("Passou pelo filtro!" + request.getRequestURI().toString());

		if (request.getHeader("Authorization") != null) {

			Authentication auth = TokenUtil.decode(request);

			if (auth != null) {
				SecurityContextHolder.getContext().setAuthentication(auth);

			} else {
				response.setStatus(401);
				response.getWriter().println("Token invalido!");
				return;
			}
		} 
		// Encaminhando a requisição para frente
		filterChain.doFilter(request, response);
	}
}
