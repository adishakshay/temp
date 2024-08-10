// package com.example.backend.service;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.stereotype.Service;

// import com.example.backend.model.Login;
// import com.example.backend.repository.LoginRepo;

// @Service
// public class LoginService {

//     @Autowired
//     LoginRepo lr;

//     @Autowired
//     BCryptPasswordEncoder passwordEncoder;  // To encode and verify passwords

//     public Login create(Login l) {
//         // Hash the password before saving
//         l.setPassword(passwordEncoder.encode(l.getPassword()));
//         return lr.save(l);
//     }

//     public Login getById(int loginId) {
//         return lr.findById(loginId).orElse(null);
//     }

//     public List<Login> getAll() {
//         return lr.findAll();
//     }

//     public Boolean updateLogin(int loginId, Login l) {
//         if (lr.findById(loginId).isEmpty()) {
//             return false;
//         }
//         try {
//             // Hash the password before saving
//             if (l.getPassword() != null) {
//                 l.setPassword(passwordEncoder.encode(l.getPassword()));
//             }
//             lr.save(l);
//         } catch (Exception e) {
//             return false;
//         }
//         return true;
//     }

//     public boolean deleteLogin(int loginId) {
//         if (this.getById(loginId) == null) {
//             return false;
//         }
//         lr.deleteById(loginId);
//         return true;
//     }

//     public Login authenticate(String email, String password) {
//         Optional<Login> userOptional = lr.findByEmail(email);
//         if (userOptional.isPresent()) {
//             Login user = userOptional.get();
//             // Verify the provided password matches the stored hashed password
//             if (passwordEncoder.matches(password, user.getPassword())) {
//                 return user;
//             }
//         }
//         return null;
//     }
// }
