package br.com.orangeportifolio.squad20.service.storage;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

public interface IStorageService {
    public String uploadFile(MultipartFile file);
    public byte[] downloadFile(String fileName);
    public boolean deleteFile(String fileName);
    public File convertMultiPartFileToFile(MultipartFile file);
}
