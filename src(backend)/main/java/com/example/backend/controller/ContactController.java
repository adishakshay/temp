package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Contact;
import com.example.backend.service.ContactService;

@RestController
public class ContactController {
    
    @Autowired
    ContactService cs;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/contact/add")
    public ResponseEntity<Contact> adddata(@RequestBody Contact c)
    {
        Contact obj=cs.create(c);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/contact/getid/{contacId}")
    public ResponseEntity<Contact> get(@PathVariable("contactId") int contactId )
    {
        try 
        {
        Contact c = cs.getById(contactId);
        return new ResponseEntity<>(c,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/contact/getall")
    public ResponseEntity<List<Contact>> getAll()
    {
        try 
        {
        List<Contact> p = cs.getAll();
        return new ResponseEntity<>(p,HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    // @GetMapping("sort/{field}")
    // public ResponseEntity<List<Contact>> getbysort(@PathVariable String field)
    // {
    //     try
    //     {
    //         return new ResponseEntity<>(cs.getbysort(field),HttpStatus.OK);
    //     }
    //     catch(Exception e)
    //     {
    //         return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    //     }
    // }
    

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/contact/update/{contactId}")
    public ResponseEntity<Contact> putMethod(@PathVariable("contactId") int contactId,@RequestBody Contact c)
    {
        if(cs.updateContact(contactId,c) == true)
        {
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/contact/delete/{contactId}")
    public ResponseEntity<Boolean> delete(@PathVariable("contactId") int contactId)
    {
        if(cs.deleteContact(contactId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}
