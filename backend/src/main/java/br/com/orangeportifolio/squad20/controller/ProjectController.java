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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    private IProjectService service;

    @PostMapping("/")
    public ResponseEntity<Project> create(@RequestPart("project") @Valid @NotNull Project project, 
    										@RequestParam("file") @NotNull MultipartFile file) {
       
    	if(service.create(project, file) != null) {
            return ResponseEntity.ok(project);
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Project> update(@RequestBody Project project, @PathVariable Integer id){

        if(service.update(project, id)) {
            return ResponseEntity.ok(project);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<Project>> findAll() {
        List<Project> list = service.findAll();
        if(list.size() > 0) {
            return ResponseEntity.ok(service.findAll());
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/{tag}")
    public ResponseEntity<List<Project>> findByTagsContaining(@PathVariable String tag) {
        List<Project> listProj = service.findByTagsContaining(tag);
        if (listProj != null) {
            return ResponseEntity.ok(listProj);
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Project> delete(@PathVariable Integer id) {
        Project res = service.findById(id);
        if(res != null) { 
            service.delete(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
