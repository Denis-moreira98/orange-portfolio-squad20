package br.com.orangeportifolio.squad20.model;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_project")
	private Integer idProject;
	
	@NotBlank
	@NotNull(message = "O campo Titulo nao pode ser nulo")
	@Length(min = 3, max = 45)
	@Column(name = "title", length = 45, nullable = false)
	private String title;
	
	@Column(name = "tags", length = 50)
	private String tags;
	
	@NotBlank
	@NotNull(message = "O campo Link do Projeto nao pode ser nulo")
	@Column(name = "link_project", length = 255)
	private String linkProject;
	
	@Length(max = 500)
	@Column(name = "description", length = 500)
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "user_project")
	@JsonIgnoreProperties("projects")
	private User userProject;
	
	@Column(name = "midia")
	private String midia;

	private Project() {}
	
	//GET E SET
	
	public Integer getIdProject() {
		return idProject;
	}
	public void setIdProject(Integer idProject) {
		this.idProject = idProject;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getLinkProject() {
		return linkProject;
	}
	public void setLinkProject(String linkProject) {
		this.linkProject = linkProject;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public User getUserProject() {
		return userProject;
	}
	public void setUserProject(User userProject) {
		this.userProject = userProject;
	}
	public String getMidia() {
		return midia;
	}
	public void setMidia(String midia) {
		this.midia = midia;
	}	
}
