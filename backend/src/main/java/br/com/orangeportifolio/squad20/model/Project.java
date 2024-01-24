package br.com.orangeportifolio.squad20.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "project")
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_project")
	private Integer idProject;
	
	
	@Column(name = "title", length = 45, nullable = false)
	private String title;
	
	@Column(name = "tags", length = 50)
	private String tags;
	
	@Column(name = "link_project", length = 255)
	private String linkProject;
	
	@Column(name = "description", length = 500)
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "user_project")
	@JsonIgnoreProperties("projects")
	private User userProject;
	
	//GET E SET
	
	public Integer getIdProject() {
		return idProject;
	}
	public void setIdPproject(Integer idProject) {
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
}
