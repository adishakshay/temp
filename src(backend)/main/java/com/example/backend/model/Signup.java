package com.example.backend.model;

// import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Signup {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int signupId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String confirmPassword;
    private String role;

    // @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)  // This indicates the owning side of the relationship
    // @JoinColumn(name = "login_Id",referencedColumnName = "loginId")
    // private Login login;

    // public Signup() {
    // }

    // public Signup(int signupId, String firstName, String lastName, String email, String password, String confirmPassword) {
    //     this.signupId = signupId;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.email = email;
    //     this.password = password;
    //     this.confirmPassword = confirmPassword;
    // }

    // public int getSignupId() {
    //     return signupId;
    // }

    // public void setSignupId(int signupId) {
    //     this.signupId = signupId;
    // }

    // public String getFirstName() {
    //     return firstName;
    // }

    // public void setFirstName(String firstName) {
    //     this.firstName = firstName;
    // }

    // public String getLastName() {
    //     return lastName;
    // }

    // public void setLastName(String lastName) {
    //     this.lastName = lastName;
    // }

    // public String getEmail() {
    //     return email;
    // }

    // public void setEmail(String email) {
    //     this.email = email;
    // }

    // public String getPassword() {
    //     return password;
    // }

    // public void setPassword(String password) {
    //     this.password = password;
    // }

    // public String getConfirmPassword() {
    //     return confirmPassword;
    // }

    // public void setConfirmPassword(String confirmPassword) {
    //     this.confirmPassword = confirmPassword;
    // }

    // public Login getLogin() {
    //     return login;
    // }

    // public void setLogin(Login login) {
    //     this.login = login;
    // }
}
