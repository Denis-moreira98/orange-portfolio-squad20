package br.com.orangeportifolio.squad20.service.midia;

import org.springframework.web.multipart.MultipartFile;

public interface IFotoStorageService {
	public String uploadLocalFile(MultipartFile file);
}
