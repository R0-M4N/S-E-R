package com.codecool.ser;

import com.codecool.ser.configuration.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class SerApplication {
	public static void main(String[] args) {
		SpringApplication.run(SerApplication.class, args);
	}
}
