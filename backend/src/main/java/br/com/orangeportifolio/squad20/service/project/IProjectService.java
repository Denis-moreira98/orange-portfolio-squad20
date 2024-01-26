package br.com.orangeportifolio.squad20.service.project;

import java.util.List;

import br.com.orangeportifolio.squad20.model.Project;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IProjectService {
	
	public Project create(@Valid @NotNull Project novo);
	public boolean update(@Valid @NotNull Project project, @NotNull @Positive Integer id);
	public List<Project> findAll();
	public List<Project> findByTags(String nome);
	public boolean delete(@NotNull @Positive Integer id);
}
