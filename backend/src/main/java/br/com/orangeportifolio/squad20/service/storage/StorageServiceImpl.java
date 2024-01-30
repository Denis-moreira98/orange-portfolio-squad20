package br.com.orangeportifolio.squad20.service.storage;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;
import com.amazonaws.util.IOUtils;

// import lombok.extern.slf4j.Slf4j;

@Service
// @Slf4j
public class StorageServiceImpl implements IStorageService {

	@Value("${aws.s3.bucket}")
    private String bucketName;

    @Autowired
    private AmazonS3 s3Client;

    public String uploadFile(MultipartFile file) {
        try {
            File fileObj = convertMultiPartFileToFile(file);
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            s3Client.putObject(new PutObjectRequest(bucketName, fileName, fileObj));
            fileObj.delete();
            return s3Client.getUrl(bucketName, fileName).toString();
        } catch (Exception e) {
            System.err.println("Ocorreu um erro ao fazer o upload do arquivo: " + e.getMessage());
            return null;
        }
    }

    public byte[] downloadFile(String fileName) {
        S3Object s3Object = s3Client.getObject(bucketName, fileName);
        S3ObjectInputStream inputStream = s3Object.getObjectContent();
        try {
            byte[] content = IOUtils.toByteArray(inputStream);
            return content;
        } catch (IOException e) {
            System.err.println("Ocorreu um erro ao fazer o download do arquivo: " + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }

    public boolean deleteFile(String fileName) {
        try {
            s3Client.deleteObject(bucketName, fileName);
            return true;
        } catch (Exception e) {
            System.err.println("Ocorreu um erro ao deletar o arquivo: " + e.getMessage());
            return false;
        }
    }

    public File convertMultiPartFileToFile(MultipartFile file) {
        File convertedFile = new File(file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            System.err.println("Erro ao converter multipartFile para file. " + e.getMessage());
            // log.error("Erro ao converter multipartFile para file.", e);
        }
        return convertedFile;
    }
}
