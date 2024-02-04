package br.com.orangeportifolio.squad20.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.orangeportifolio.squad20.service.storage.StorageServiceImpl;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/file")
public class StorageController {

    @Autowired
    private StorageServiceImpl service;

    @Operation(description = "Upload de arquivos do S3")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Arquivo enviado com sucesso"),
        @ApiResponse(responseCode = "400", description = "Arquivo inválido.")
    })
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        return new ResponseEntity<>(service.uploadS3File(file), HttpStatus.OK);
    }

    @Operation(description = "Download de arquivos do S3")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Arquivo baixado com sucesso"),
        @ApiResponse(responseCode = "400", description = "Arquivo inválido")
    })
    @GetMapping("/download/{fileName}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String fileName) {
        byte[] data = service.downloadFile(fileName);
        ByteArrayResource resource = new ByteArrayResource(data);
        return ResponseEntity
                .ok()
                .contentLength(data.length)
                .header("Content-type", "application/octet-stream")
                .header("Content-disposition", "attachment; filename=\"" + fileName + "\"")
                .body(resource);
    }

    @Operation(description = "Exclusão de arquivos do S3")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Arquivo excluído com sucesso"),
        @ApiResponse(responseCode = "400", description = "Arquivo inválido")
    })
    @DeleteMapping("/delete/{fileName}")
    public ResponseEntity<Boolean> deleteFile(@PathVariable String fileName) {
        return new ResponseEntity<>(service.deleteFile(fileName), HttpStatus.OK);
    }
}