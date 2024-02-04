package br.com.orangeportifolio.squad20.controller;

import java.util.Base64;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.dto.ProjectDTO;
import br.com.orangeportifolio.squad20.dto.ProjectDetailsDTO;
import br.com.orangeportifolio.squad20.model.Project;
import br.com.orangeportifolio.squad20.service.project.IProjectService;
import br.com.orangeportifolio.squad20.service.storage.ILocalFotoStorageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

@Validated
@RestController
@CrossOrigin("*")
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	private IProjectService service;

	@Autowired
	private ILocalFotoStorageService fotoStorageService;

	@Operation(description = "Criar um novo projeto")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Projeto criado com sucesso"),
			@ApiResponse(responseCode = "400", description = "Requisição inválida")
	})
	@PostMapping("/")
	public ResponseEntity<ProjectDTO> create(@RequestPart("project") @Valid @NotNull Project project,
											@RequestParam("file") @NotNull MultipartFile file) {
		
		ProjectDTO projectDTO = service.create(project, file);
		
		if (projectDTO != null) {
			return ResponseEntity.ok(projectDTO);
		}
		return ResponseEntity.badRequest().build();
	}

	@Operation(description = "Editar um projeto")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Projeto editado com sucesso"),
		@ApiResponse(responseCode = "400", description = "Requisição inválida")
	})
	@PutMapping("/edit/{id}")
	public ResponseEntity<ProjectDTO> update(@RequestPart("project") @Valid @NotNull ProjectDTO project, 
											 @PathVariable Integer id,
											 @RequestPart("file") MultipartFile file) {

		if (service.update(project, id, file)) {
			return ResponseEntity.ok(project);
		}
		return ResponseEntity.badRequest().build();
	}

	@Operation(description = "Listar todos os projetos")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Projetos listados com sucesso"),
		@ApiResponse(responseCode = "404", description = "Projetos não encontrados")
	})
	@GetMapping("/all")
	public ResponseEntity<List<ProjectDetailsDTO>> findAll() {
		List<ProjectDetailsDTO> list = service.findAllProjectDTO();
		if (list.size() > 0) {
			return ResponseEntity.ok(list);
		}
		return ResponseEntity.notFound().build();
	}

	@Operation(description = "Listar projetos por tag")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "Projetos listados com sucesso"),
		@ApiResponse(responseCode = "404", description = "Projetos não encontrados")
	})
	@GetMapping("/{tag}")
	public ResponseEntity<List<ProjectDTO>> findByTagsContaining(@RequestParam (name = "tag") @NotNull String tag) {
		List<ProjectDTO> listProj = service.findByTagsContaining(tag);
		if (listProj != null) {
			return ResponseEntity.ok(listProj);
		}
		return ResponseEntity.notFound().build();
	}

	@Operation(description = "Excluir um projeto")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "204", description = "Projeto excluído com sucesso"),
		@ApiResponse(responseCode = "404", description = "Projeto não encontrado")
	})
	@DeleteMapping("/{id}")
	public ResponseEntity<Project> delete(@PathVariable Integer id) {
		Project res = service.findById(id);
		if (res != null) {
			service.delete(id);
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
}
