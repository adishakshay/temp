// package com.example.backend.model;

// import com.fasterxml.jackson.annotation.JsonIgnore;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.OneToOne;

// @Entity
// public class Login {

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int loginId;
    
//     private String email;
//     private String password;

//     @JsonIgnore
//     @OneToOne(mappedBy = "login")
//     private Signup signup;

//     public Login() {
//     }

//     public Login(int loginId, String email, String password, Signup signup) {
//         this.loginId = loginId;
//         this.email = email;
//         this.password = password;
//         this.signup = signup;
//     }

//     public int getLoginId() {
//         return loginId;
//     }

//     public void setLoginId(int loginId) {
//         this.loginId = loginId;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public Signup getSignup() {
//         return signup;
//     }

//     public void setSignup(Signup signup) {
//         this.signup = signup;
//     }
// }
