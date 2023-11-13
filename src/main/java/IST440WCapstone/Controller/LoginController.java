package IST440WCapstone.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class LoginController {
    Logger LOG = LoggerFactory.getLogger(LoginController.class);
    @RequestMapping(value = "/validate/{username}/{password}", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<String> validateCredentials(@PathVariable String username,
                                                      @PathVariable String password) {

        LOG.info("Username: {}, Password: {}", username, password);

        boolean isValid = IST440WCapstone.Validation.Validate.doValidation(username, password);

        LOG.info("Determined validation: {}", isValid);

        if (isValid) {
            return new ResponseEntity<>("Valid Credentials", HttpStatus.OK);
        }
        if (!isValid) {
            return new ResponseEntity<>("Invalid Credentials", HttpStatus.FORBIDDEN);
        }
        else {
            return new ResponseEntity<>("Unknown Error", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/validate", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Map<String,String> postValidation(@RequestBody Credentials creds) {
        LOG.info("creds: {}", creds);

        String username = creds.getUsername();
        String password = creds.getPassword();

        LOG.info("usr: {}, pwd:{}", username, password);

        boolean isValid = IST440WCapstone.Validation.Validate.doValidation(username, password);

        LOG.info("Determined validation: {}", isValid);
        HashMap<String,String> token = new HashMap<>();

        if (isValid) {
            token.put("token", "test123");
            return token;
            //return new ResponseEntity<>(token, HttpStatus.ACCEPTED);
        }
        else {
            token.put("token:", "");
            return token;
            //return new ResponseEntity<>(token, HttpStatus.FORBIDDEN);
        }
    }

}
