package br.com.orangeportifolio.squad20.service.midia;

import org.springframework.web.multipart.MultipartFile;

public interface IFotoStorageService {
	public String uploadLocalFile(MultipartFile file);
	
	public void deleteLocalFile(String fileName);
	
	public byte[] getImage(String imageName);
}
