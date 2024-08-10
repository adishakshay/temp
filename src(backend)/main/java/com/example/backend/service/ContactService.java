package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepo;

@Service
public class ContactService {
   
    @Autowired
    ContactRepo cr;

    //post
    public Contact create(Contact c)
    {
        return cr.save(c);
    }

    //getbyid
    public Contact getById(int contactId)
    {
        return cr.findById(contactId).orElse(null);
    }

    //getAll
    public List<Contact> getAll()
    {
        return cr.findAll();
    }
    
    //put
    public boolean updateContact(int contactId, Contact c)
    {
        if(cr.findById(contactId)==null)
        {
            return false;
        }
        try
        {
            cr.save(c);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }

    public boolean deleteContact(int contactId)
    {
        if(this.getById(contactId) == null)
        {
            return false;
        }
        cr.deleteById(contactId);
        return true;
    }

    // public List<Contact> getbysort(String field)
    // {
    //     return cr.findAll(Sort.by(Sort.Direction.ASC,field));
    // }

}
