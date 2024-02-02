package br.com.orangeportifolio.squad20.service.project;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
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
			System.out.println("Subindo arquivo para o S3...");
			String pathFile = storageS3Service.uploadS3File(file);
			//String pathFile = null;
	    	
	    	if(pathFile == null) { //Fazendo upload para pasta local caso a requisição do s3 falhe
	    		
	    		System.out.println("Requisição para o S3 falhou! Salvando localmente...");
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
	public Boolean update(@Valid @NotNull ProjectDTO project, @NotNull @Positive Integer id, MultipartFile file) {
		
		try {
			
			 // Fazendo o upload para o s3 e retorna o caminho url
			System.out.println("Subindo arquivo para o S3...");
			String pathFile = storageS3Service.uploadS3File(file);
			//String pathFile = null;
	    	
	    	if(pathFile == null) { //Fazendo upload para pasta local caso a requisição do s3 falhe
	    		
	    		System.out.println("Requisição para o S3 falhou! Salvando localmente...");
	    		pathFile = localFotoService.uploadLocalFile(file);
	    	}
	    	
	    	Optional<Project> res = dao.findById(id);
			if(res.isPresent()) {
				Project existingProject = res.get();
				this.exclusedImageStorage(existingProject);
				
				project.setMidia(pathFile);
				
				BeanUtils.copyProperties(project, existingProject, "idProject", "userId");
			
				dao.save(existingProject);
				return true;
			}
		} catch (Exception e) {
			System.err.println("Erro ao atualizar o projeto!" + e);
			return false;
		}
		return null;
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
			Project project = res.get();
			this.exclusedImageStorage(project);
			dao.deleteById(id);
		    return true;
		} 
		return false;
	}
	
	private Boolean exclusedImageStorage(Project project) {
		
		String url = project.getMidia();
		
		 try {
	            URL fileUrl = new URL(url);
	            String fileName = new File(fileUrl.getPath()).getName();
	            System.out.println("Excluindo imagem: " + fileName);
	            
	            storageS3Service.deleteFile(fileName);
	            return true;
	            
	        } catch (MalformedURLException e) {
	            System.err.println("URL inválida: " + url);
	            return false;
	        }
	}
}
