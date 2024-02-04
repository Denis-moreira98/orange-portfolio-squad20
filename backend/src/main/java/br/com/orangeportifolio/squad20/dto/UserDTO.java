package br.com.orangeportifolio.squad20.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.orangeportifolio.squad20.model.User;

public class UserDTO {
    private Integer idUser;
    private String name;
    private String email;
    private List<ProjectDTO> projects;

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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<ProjectDTO> getProjects() {
		return projects;
	}

	public void setProjects(List<ProjectDTO> list) {
		this.projects = list;
	}

	public static UserDTO fromUser(User user) {
        UserDTO dto = new UserDTO();
        dto.setIdUser(user.getIdUser());
        dto.setName(user.getName());
        dto.setEmail(user.getEmail());
        
        dto.setProjects(user.getProjects()
        					.stream()
        					.map(ProjectDTO::fromProject)
        					.collect(Collectors.toList()));
        return dto;
    }
}