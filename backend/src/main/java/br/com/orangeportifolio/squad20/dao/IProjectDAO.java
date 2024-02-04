package br.com.orangeportifolio.squad20.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.orangeportifolio.squad20.dto.ProjectDetailsDTO;
import br.com.orangeportifolio.squad20.model.Project;

public interface IProjectDAO extends JpaRepository<Project, Integer> {
	
	public List<Project> findByTagsContaining(String tag);
	
	@Query("SELECT " +
	           "p.idProject AS idProject, " +
	           "p.title AS title, " +
	           "p.tags AS tags, " +
	           "p.linkProject AS linkProject, " +
	           "p.description AS description, " +
	           "u.idUser AS userId, " +
	           "u.name AS userName, " +
	           "p.midia AS midia " +
	           "FROM Project p JOIN p.userProject u")
	public List<ProjectDetailsDTO> findAllProjectDTO();

}