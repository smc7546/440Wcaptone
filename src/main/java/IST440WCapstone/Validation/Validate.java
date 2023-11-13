package IST440WCapstone.Validation;

import IST440WCapstone.Controller.Credentials;
public class Validate {
    static Credentials credentials1 = new Credentials("janedoe@gmail.com", "test1");
    static Credentials credentials2 = new Credentials("johndoe@gmail.com", "password123");
    static Credentials testCreds = new Credentials("sara", "test");
    public static boolean doValidation(String username, String password) {
        if (username.equals(credentials1.getUsername()) && password.equals(credentials1.getPassword())) {
            return true;
        } else if (username.equals(credentials2.getUsername()) && password.equals(credentials2.getPassword())) {
            return true;
        } else return username.equals(testCreds.getUsername()) && password.equals(testCreds.getPassword());
    }

    public static boolean doValidation(Credentials creds) {
        String username = creds.getUsername();
        String password = creds.getPassword();

        if (username.equals(credentials1.getUsername()) && password.equals(credentials1.getPassword())) {
            return true;
        } else if (username.equals(credentials2.getUsername()) && password.equals(credentials2.getPassword())) {
            return true;
        } else return username.equals(testCreds.getUsername()) && password.equals(testCreds.getPassword());
    }
}
