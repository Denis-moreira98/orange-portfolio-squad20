package br.com.orangeportifolio.squad20.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurity {
	
	@Bean
	public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
		
		//Desabilita a tela de login do SpringBoot
		http.csrf( (csrf) -> { 
			csrf.disable();
		})
		.authorizeHttpRequests( (auth) -> {
			auth.requestMatchers(new  AntPathRequestMatcher("/user/new", "POST")).permitAll()
			    .requestMatchers(new  AntPathRequestMatcher("/login", "POST")).permitAll()
				.requestMatchers(new  AntPathRequestMatcher("/file/upload", "POST")).permitAll()
			    .requestMatchers(new  AntPathRequestMatcher("/h2-console/**")).permitAll()
			    .anyRequest().authenticated();
		})
		.addFilterBefore(new OrangeFilter(), UsernamePasswordAuthenticationFilter.class)
		.headers((header) -> header.frameOptions((iframe) -> iframe.disable()));
		
		return http.build();
	}
}
