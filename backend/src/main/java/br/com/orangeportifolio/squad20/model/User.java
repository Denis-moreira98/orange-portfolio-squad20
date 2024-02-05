package br.com.orangeportifolio.squad20.model;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_user")
	private Integer idUser;
	
	@NotBlank(message = "O campo nome nao pode ter espaço em branco")
	@NotNull(message = "O campo nome não pode ser nulo")
	@Length(min = 3, max = 75)
	@Column(name = "name", length = 75)
	private String name;
	
	@Length(min = 5, max = 20)
	@Column(name = "country", length = 20)
	private String country;
	
	@NotBlank(message = "O campo email nao pode ter espaço em branco")
	@NotNull(message = "O campo email não pode ser nulo")
	@Email(message = "Email não é válido")
	@Column(name = "email", length = 45, nullable = false)
	private String email;
	
	@NotBlank(message = "O campo senha nao pode ter espaço em branco")
	@NotNull(message = "O campo senha não pode ser nulo")
	@Length(min = 5, max = 75)
	@Column(name = "password", length = 45, nullable = false)
	private String  password;
	
	@OneToMany(mappedBy = "userProject", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("userProject")
	private List<Project> projects;
	
	private User() {}

	//GET AND SET

	public Integer getIdUser() {
		return idUser;
	}

	public void setIdUser(Integer idUser) {
		this.idUser = idUser;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getCountry() {
		return country;
	}
	
	public void setCountry(String country) {
		this.country = country;
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

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	@Override
	public String toString() {
		return "User [idUser=" + idUser + ", name=" + name + ", country=" + country + ", email=" + email + ", password="
				+ password + ", projects=" + projects + "]";
	}
	
	
}
