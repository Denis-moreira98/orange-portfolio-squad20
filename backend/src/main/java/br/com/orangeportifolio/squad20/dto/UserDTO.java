package br.com.orangeportifolio.squad20.dto;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public class UserDTO {

	 @NotNull(message = "O campo email não pode ser nulo")
	 @Email(message = "Email não é válido")
	  private String email;

	 @NotNull(message = "O campo password não pode ser nulo")
	 @Length(min = 5, max = 75, message = "O campo password deve ter entre 5 e 75 caracteres")
	  private String password;
	 

	public UserDTO( String email, String password) {
		this.email = email;
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
