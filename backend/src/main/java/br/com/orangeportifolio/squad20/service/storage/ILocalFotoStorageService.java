package br.com.orangeportifolio.squad20.service.storage;

import org.springframework.web.multipart.MultipartFile;

public interface ILocalFotoStorageService {
	public String uploadLocalFile(MultipartFile file);
	
	public void deleteLocalFile(String fileName);
	
	public byte[] getImage(String imageName);
}