package br.com.ingridmendes.gateway;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@SpringBootApplication
public class GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	@RestController
	class ProfileController {
		
		@GetMapping("/userinfo")
		public Map<String, Object> userinfo(@AuthenticationPrincipal OidcUser oidcUser, 
					@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
			var attributes = new HashMap<>(oidcUser.getAttributes());
			attributes.put("token", oidcUser.getIdToken().getTokenValue());
			attributes.put("clientName", authorizedClient.getClientRegistration().getClientId());
			attributes.put("userAttributes", oidcUser.getAttributes());
			return attributes;
		}
	}

}
