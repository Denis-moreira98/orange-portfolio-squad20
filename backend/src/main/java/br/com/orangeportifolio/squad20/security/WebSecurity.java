package br.com.orangeportifolio.squad20.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurity {
	
	@Bean
	public SecurityFilterChain securityFilterChain (HttpSecurity http) throws Exception {
		
		http.cors(cors -> {
			cors.configurationSource(this.corsConfigurationSource());
		})
		
		//Desabilita a tela de login do SpringBoot
		.csrf( (csrf) -> { 
			csrf.disable();
		})
		.authorizeHttpRequests( (auth) -> {
			auth.requestMatchers(new  AntPathRequestMatcher("/user/new", "POST")).permitAll()
			    .requestMatchers(new  AntPathRequestMatcher("/login", "POST")).permitAll()
			    .requestMatchers(new  AntPathRequestMatcher("/h2-console/**")).permitAll()
				.requestMatchers(new  AntPathRequestMatcher("/swagger-ui/**")).permitAll()
				.requestMatchers(new  AntPathRequestMatcher("/v3/api-docs/**")).permitAll()
			    .anyRequest().authenticated();
		})
		.addFilterBefore(new OrangeFilter(), UsernamePasswordAuthenticationFilter.class)
		.headers((header) -> header.frameOptions((iframe) -> iframe.disable()));
		
		return http.build();
	}
	
	public CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList("*"));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Arrays.asList("*"));
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}
}
