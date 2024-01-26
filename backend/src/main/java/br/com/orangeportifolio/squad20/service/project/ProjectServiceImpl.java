package br.com.orangeportifolio.squad20.service.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.dao.IProjectDAO;
import br.com.orangeportifolio.squad20.model.Project;
import br.com.orangeportifolio.squad20.service.midia.IFotoStorageService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class ProjectServiceImpl implements IProjectService{
	
	@Autowired
	private IProjectDAO dao;
	
	@Autowired
	private IFotoStorageService uploadService;

	@Override
	public Project create(@Valid @NotNull Project project, MultipartFile file) {
	    try {
	        // Fazendo o upload do arquivo e obtendo o nome do arquivo
	        String fileName = uploadService.uploadLocalFile(file);

	        // Configurando o nome do arquivo na mídia do projeto
	        project.setMidia(fileName);

	        // Salvando o projeto
	        return dao.save(project);
	        
	    } catch (Exception e) {
	        // Tratando a exceção
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
	public List<Project> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Project> findByTagsContaining(String nome) {
		return dao.findByTagsContaining(nome);
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
