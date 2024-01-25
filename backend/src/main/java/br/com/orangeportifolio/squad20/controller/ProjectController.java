package br.com.orangeportifolio.squad20.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.orangeportifolio.squad20.dao.IProjectDAO;
import br.com.orangeportifolio.squad20.model.Project;
import br.com.orangeportifolio.squad20.services.IProjectService;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/project")
public class ProjectController implements IProjectService {

    @Autowired
    private IProjectDAO projectDAO;

    
    @PostMapping
    public Project create(@RequestBody Project project) {
        Project newProject = projectDAO.save(project);
        return newProject;
    }

    @PutMapping
    public boolean update(Project project, Integer id) {
        Project updateProject = project;
        updateProject.setDescription(null);
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'update'");
    }

    
    @GetMapping("/")
    public List<Project> findAll() {
        return projectDAO.findAll();
    }

    
    @GetMapping(value = "/{tag}")
    public List<Project> findByTags(@PathVariable String tag) {
        return projectDAO.findByTags(tag);
    }

    
    public boolean delete(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
