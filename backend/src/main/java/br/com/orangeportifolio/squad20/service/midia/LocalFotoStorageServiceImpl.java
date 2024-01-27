package br.com.orangeportifolio.squad20.service.midia;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.constraints.NotNull;

@Service
public class LocalFotoStorageServiceImpl implements IFotoStorageService{

	private static String pathImage = "C:\\Users\\Jefferson Pedro\\Documents\\GitHub\\orange-portfolio-squad20\\backend\\src\\image";
	
	@Override
	public String uploadLocalFile(@NotNull MultipartFile image) {
					
	    try {
	        System.out.println("Realizando upload do arquivo: " + image.getOriginalFilename());

	        String uniqueFileName = generateUniqueFileName(image.getOriginalFilename());

	        File dir = new File(pathImage);
	        
	        // Crie o diretório se ele não existir
	        if(!dir.exists()) {
	        	dir.mkdir();
	        }
	        
	        //Criando arquivo no diretório
	        File serveFile = new File(dir.getAbsolutePath() + File.separator + uniqueFileName);
	        
	        BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serveFile));
	        stream.write(image.getBytes());
	        stream.close();
	        
	        // Retorne o caminho completo do arquivo salvo
	        System.out.println("Armazenando em: " + serveFile.getAbsolutePath());
	        String fullPath = serveFile.getAbsolutePath();
	        
	        return fullPath;

	    } catch (IOException e) {
	        System.err.printf("Ocorreu um erro ao realizar o upload do arquivo: ");
	        e.printStackTrace();
	    }
	    return null;
	}

	@Override
	public void deleteLocalFile(String fileName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public byte[] getImage(String imageName) {
		 
		 try {
			 
			Path path = Paths.get(pathImage, imageName);
			return Files.readAllBytes(path);
			
		} catch (IOException e) {
			System.err.println("Ocorreu um erro ao obter a imagem: ");
			e.printStackTrace();
		}
		 return null;
	}
	
	private String generateUniqueFileName(String originalFileName) {
        String uniqueID = UUID.randomUUID().toString();
        return "image_" + uniqueID + "_" + originalFileName;
    }
}
