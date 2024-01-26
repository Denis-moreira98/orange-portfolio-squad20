package br.com.orangeportifolio.squad20.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.model.Project;
import br.com.orangeportifolio.squad20.service.project.IProjectService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/project")
public class ProjectController {

    @Autowired
    private IProjectService projectService;

    @PostMapping("/")
    public ResponseEntity<Project> create(@RequestPart("project") @Valid @NotNull Project project, 
    										@RequestParam("file") @NotNull MultipartFile file) {
       
    	if(projectService.create(project, file) != null) {
            return ResponseEntity.ok(project);
        }
        return ResponseEntity.badRequest().build();
    }

    // @PutMapping("/project/{id}")
    // public ResponseEntity<Project> update(@RequestBody @Valid @NotNull Project project, @PathVariable Integer id) {
    //     project.setIdPproject(id);
    //     Project upProject = projectService.updateProject(project);
    //     if (upProject != null) {
    //         return ResponseEntity.ok(upProject);
    //     }
    //     return ResponseEntity.badRequest().build();
    // }

    @GetMapping("/projects")
    public ResponseEntity<List<Project>> findAll() {
        return ResponseEntity.ok(projectService.findAll());
    }

    @GetMapping(value = "/{tag}")
    public ResponseEntity<List<Project>> findByTags(@PathVariable String tag) {
        List<Project> listProj = projectService.findByTags(tag);
        if (listProj != null) {
            return ResponseEntity.ok(listProj);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/project/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Integer id) {
        projectService.delete(id);
        return null;
    }

}
