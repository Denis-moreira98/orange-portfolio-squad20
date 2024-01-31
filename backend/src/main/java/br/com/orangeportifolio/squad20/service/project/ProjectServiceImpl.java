package br.com.orangeportifolio.squad20.service.project;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.dao.IProjectDAO;
import br.com.orangeportifolio.squad20.dto.ProjectDTO;
import br.com.orangeportifolio.squad20.model.Project;
import br.com.orangeportifolio.squad20.service.storage.ILocalFotoStorageService;
import br.com.orangeportifolio.squad20.service.storage.StorageServiceImpl;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class ProjectServiceImpl implements IProjectService{
	
	@Autowired
	private IProjectDAO dao;
	
	@Autowired
	private ILocalFotoStorageService localFotoService;
	
	@Autowired
	private StorageServiceImpl storageS3Service;

	@Override
	public ProjectDTO create(@Valid @NotNull Project project, MultipartFile file) {
			    
		try {
	        // Fazendo o upload para o s3 e retorna o caminho url
			String pathFile = storageS3Service.uploadS3File(file);
	    	
	    	if(pathFile == null) { //Fazendo upload para pasta local caso a requisição do s3 falhe
	    		
	    		pathFile = localFotoService.uploadLocalFile(file);
	    	}

	        // Configurando o nome do arquivo na mídia do projeto
	        project.setMidia(pathFile);

	        // Salvando o projeto
	        dao.save(project);
	       
	        return ProjectDTO.fromProject(project);
	        
	    } catch (Exception e) {

	        System.err.println("Ocorreu um erro ao criar o projeto: " + e.getMessage());
	        return null;
	    }
	}

	@Override
	public boolean update(@Valid @NotNull Project project, @NotNull @Positive Integer id) {
		Optional<Project> res = dao.findById(id);
		if(res.isPresent()) {
			Project existingProject = res.get();
			BeanUtils.copyProperties(project, existingProject, "idUser");
			dao.save(existingProject);
			return true;
		}
		System.err.println("Erro ao atualizar o projeto!");
		return false;
	}

	@Override
	public Project findById(@NotNull @Positive Integer id) {
		return dao.findById(id).orElse(null);
	}

	@Override
	public List<ProjectDTO> findAll() {
	    List<Project> projects = dao.findAll();
	    List<ProjectDTO> projectDTOs = projects.stream()
	    		.map(ProjectDTO::fromProject)
	    		.collect(Collectors.toList());
	    
	    return projectDTOs;
	}
	
	@Override
	public List<ProjectDTO> findByTagsContaining(String nome) {
		
		List<Project> projects = dao.findByTagsContaining(nome);
		 List<ProjectDTO> projectDTOs = projects.stream()
		    		.map(ProjectDTO::fromProject)
		    		.collect(Collectors.toList());
		return projectDTOs;
	}

	@Override
	public boolean delete(@NotNull @Positive Integer id) {
		Optional<Project> res = dao.findById(id);
		if(res.isPresent()) {
			dao.deleteById(id);
			return true;
		}
		System.err.println("Ocorreu um erro ao excluir o projeto!");
		return false;
	}
}
