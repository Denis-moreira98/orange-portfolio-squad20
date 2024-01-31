package br.com.orangeportifolio.squad20.dto;

import br.com.orangeportifolio.squad20.model.Project;

public class ProjectDTO {
    private Integer idProject;
    private String title;
    private String tags;
    private String linkProject;
    private String description;
    private Integer userId;
    private String midia;
    
    //GET AND SET
   
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


	public Integer getUserId() {
		return userId;
	}


	public void setUserId(Integer userId) {
		this.userId = userId;
	}


	public String getMidia() {
		return midia;
	}


	public void setMidia(String midia) {
		this.midia = midia;
	}

	public static ProjectDTO fromProject(Project project) {
        ProjectDTO dto = new ProjectDTO();
        dto.setIdProject(project.getIdProject());
        dto.setTitle(project.getTitle());
        dto.setTags(project.getTags());
        dto.setLinkProject(project.getLinkProject());
        dto.setDescription(project.getDescription());
        dto.setUserId(project.getUserProject().getIdUser());
        dto.setMidia(project.getMidia());
        
        return dto;
    }
}
