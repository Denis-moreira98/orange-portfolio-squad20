package br.com.orangeportifolio.squad20.service.project;

import java.util.List;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.dto.ProjectDTO;
import br.com.orangeportifolio.squad20.model.Project;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public interface IProjectService {
	
	public ProjectDTO create(@Valid @NotNull Project project, @RequestParam("file") MultipartFile file);
	public Boolean update(@Valid @NotNull Project project, @NotNull @Positive Integer id, MultipartFile file);
	public List<ProjectDTO> findAll();
	public Project findById(@NotNull @Positive Integer id);
	public List<ProjectDTO> findByTagsContaining(String nome);
	public boolean delete(@NotNull @Positive Integer id);
}
