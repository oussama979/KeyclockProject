package ma.enset.supplierservice.sec;

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KeycloakConfigAdapter {
    @Bean
    KeycloakSpringBootConfigResolver keycloakConfigResolver(){

        return new KeycloakSpringBootConfigResolver();
    }
}
