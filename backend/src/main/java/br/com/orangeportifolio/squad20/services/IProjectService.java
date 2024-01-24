package br.com.orangeportifolio.squad20.services;

import java.util.List;

import br.com.orangeportifolio.squad20.model.Project;

public interface IProjectService {
	
	public Project create(Project novo);
	public boolean update(Project Project, Integer id);
	public List<Project> findAll();
	public List<Project> findByTag(String nome);
	public boolean delete(Integer id);
}
