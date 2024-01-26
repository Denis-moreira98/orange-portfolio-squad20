package br.com.orangeportifolio.squad20.service.project;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.model.Project;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IProjectService {
	
	public Project create(@Valid @NotNull Project project, @RequestParam("file") MultipartFile file);
	public boolean update(@Valid @NotNull Project project, @NotNull @Positive Integer id);
	public List<Project> findAll();
	public Project findById(@NotNull @Positive Integer id);
	public List<Project> findByTags(String nome);
	public boolean delete(@NotNull @Positive Integer id);
}
