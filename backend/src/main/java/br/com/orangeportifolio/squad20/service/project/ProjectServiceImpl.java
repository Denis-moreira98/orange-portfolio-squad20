package br.com.orangeportifolio.squad20.service.project;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import br.com.orangeportifolio.squad20.dao.IProjectDAO;
import br.com.orangeportifolio.squad20.model.Project;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class ProjectServiceImpl implements IProjectService{
	
	@Autowired
	private IProjectDAO dao;

	@Override
	public Project create(@Valid @NotNull Project novo) {
		return dao.save(novo);
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
	public List<Project> findAll() {
		return dao.findAll();
	}

	@Override
	public List<Project> findByTags(String nome) {
		return dao.findByTags(nome);
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
