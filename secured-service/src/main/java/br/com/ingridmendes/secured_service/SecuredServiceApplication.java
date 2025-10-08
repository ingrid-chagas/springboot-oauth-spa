package br.com.ingridmendes.secured_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class SecuredServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecuredServiceApplication.class, args);
	}

	@RestController
	class ResourceController {
		
		@GetMapping("/resource")
		public String getResource(@AuthenticationPrincipal Jwt jwt) {
			var strBuilder = new StringBuilder();
			strBuilder.append("<h1> Secured Resource </h1>")
					.append("<p> JWT Token %s</p>".formatted(jwt.getTokenValue()))
					.append("<p> JWT Headers %s</p>".formatted(jwt.getHeaders()))
					.append("<p> JWT Headers %s</p>".formatted(jwt.getClaims().toString()))
					.append("<p> Resource accessed by: %s (with subjsct: %s)</p>".formatted(jwt.getAudience(), jwt.getSubject()));
			return strBuilder.toString();
		}
	}
}
