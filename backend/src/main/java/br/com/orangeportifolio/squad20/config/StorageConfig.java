package br.com.orangeportifolio.squad20.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class StorageConfig {

	@Value("${AWS_KEY}")
	private String accessKey;
	
	@Value("${AWS_SECRET}")
	private String accessSecret;
	
	@Value("${aws.region}")
	private String region;
	
	@Bean
	public AmazonS3 S3Client() {
		AWSCredentials credentials=new BasicAWSCredentials(accessKey, accessSecret);
		return AmazonS3ClientBuilder.standard()
				.withCredentials(new AWSStaticCredentialsProvider(credentials))
				.withRegion(region)
				.build();
	}
}