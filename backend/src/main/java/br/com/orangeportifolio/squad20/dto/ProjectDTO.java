package br.com.orangeportifolio.squad20.dto;

import br.com.orangeportifolio.squad20.model.Project;

public record ProjectDTO(
	    Integer idProject,
	    String title,
	    String tags,
	    String linkProject,
	    String description,
	    Integer userId,
	    String midia
	) {
	    public static ProjectDTO fromProject(Project project) {
	        return new ProjectDTO(
	            project.getIdProject(),
	            project.getTitle(),
	            project.getTags(),
	            project.getLinkProject(),
	            project.getDescription(),
	            project.getUserProject().getIdUser(),
	            project.getMidia()
	        );
	    }
	}