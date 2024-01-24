package br.com.orangeportifolio.squad20.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.orangeportifolio.squad20.model.Project;

public interface IProjectDAO extends JpaRepository<Project, Integer>{
	
	public List<Project> findByTags(String tag);
}
