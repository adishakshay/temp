package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

// import com.example.backend.model.Login;
import com.example.backend.model.Signup;
import com.example.backend.service.SignupService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
public class SignupController {
    
    @Autowired
    SignupService ss;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup/add")
    public ResponseEntity<Signup> post(@RequestBody Signup sp) 
    {
        Signup obj = ss.create(sp);
        String email = obj.getEmail();
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/signup/getid/{signupId}")
    public ResponseEntity<Signup> getById(@PathVariable("signupId") int signupId) 
    {
        try
        {
            Signup obj = ss.getById(signupId);
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/signup/getall")
    public ResponseEntity<List<Signup>> getAll() 
    {
        try {
            List<Signup> obj = ss.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/signup/update/{signId}")
    public ResponseEntity<Signup> putMethod(@PathVariable("signId") int signId, @RequestBody Signup sp) {
        
        if(ss.updateSignup(signId, sp) == null)
        {
            return new ResponseEntity<>(sp,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/signup/delete/{signupId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable("signId") int signId)
    {
        if(ss.deleteSignup(signId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
