package br.com.orangeportifolio.squad20.service.storage;

import org.springframework.web.multipart.MultipartFile;

public interface ILocalFotoStorageService {
	public String uploadLocalFile(MultipartFile file);
	
	public Boolean deleteLocalFile(String fileName);
	
	public String getImage(String imageName);
}
