package IST440WCapstone.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
