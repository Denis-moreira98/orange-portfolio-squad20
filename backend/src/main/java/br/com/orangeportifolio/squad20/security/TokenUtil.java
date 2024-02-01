package br.com.orangeportifolio.squad20.security;

import java.io.IOException;
import java.security.Key;
import java.util.Collections;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import br.com.orangeportifolio.squad20.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;

public class TokenUtil {
	
	//Parâmetros de configuração de token
	public static final long SEGUNDOS = 1000;
	public static final long MINUTOS = 60 * SEGUNDOS;
	public static final long HORAS = 60 * MINUTOS;
	public static final long DIAS = 24 * HORAS;
	public static final long EXPIRATION  = 5 * DIAS;
	
	public static final String ISSUER = "**TeamSquad20**";
	public static final String SECRET_KEY = "0123456789012345678901234567890123"; //Chave com 32bytes
	public static final String PREFIX = "Bearer ";
	
	
	public static OrangeToken encode(User user) {
	
		try {
			// definir a chave para criptografar meu JWT
			Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
			
			// gerando um JWT e colocando as informações necessarias
			String jwtToken = Jwts.builder().subject(user.getEmail())
											.issuer(ISSUER)
											.expiration(new Date(System.currentTimeMillis() + EXPIRATION))
											.signWith(key)
											.compact();
			
			//System.err.println("TokenUtil sendo gerado: " + jwtToken.toString());
			
			OrangeToken token = new OrangeToken(jwtToken);
			return token;
		} 
		catch (Exception ex) {
			System.err.println("Erro ao gerar o token: ");
			ex.printStackTrace();
		}
		return null;
	}
	
	public static Authentication decode(HttpServletRequest request) throws ServletException, IOException{
		
		try {
			String token = request.getHeader("Authorization");
			
			if (token != null) {
				
				//System.err.println("TokenUtil: " + token);
				
				token = token.replace(PREFIX, ""); //Remove o 'Bearer' e extrai apenas o JWT
				
				SecretKey secretKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
				
				//Criando o parser do token
				JwtParser jwtParser = Jwts.parser().verifyWith(secretKey).build();
				
				//Recuperando cada um dos componentes do jwt(Claims)
				Claims claims = (Claims)jwtParser.parse(token).getPayload();
				
				//Verifica se o token é valido
				String issuer = claims.getIssuer();
				String subject = claims.getSubject();
				Date expiration = claims.getExpiration();
				
				if(isValid(issuer, subject, expiration)) {
					return new UsernamePasswordAuthenticationToken(subject, null,  Collections.emptyList());
				}				
			}
			
		} catch (Exception e) {
			System.err.println("Deu erro aqui: ");
			e.printStackTrace();
		}
		return null;
	}

	private static boolean isValid(String issuer, String subject, Date expiration) {
		return issuer.equals(ISSUER) && 
				subject != null && 
				subject.length() > 0 && 
				expiration.after(new Date(System.currentTimeMillis()));
	}
}
