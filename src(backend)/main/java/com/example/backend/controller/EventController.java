package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Event;
import com.example.backend.service.EventService;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
public class EventController {
 
    @Autowired
    EventService es;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/event/add")
    public ResponseEntity<Event> addEvent(@RequestBody Event ev) {

        Event obj = es.create(ev);       
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/event/getId/{eventId}")
    public ResponseEntity<Event> get(@PathVariable("eventId") int eventId) {

        try{
            Event obj = es.getById(eventId);
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/event/getAll")
    public ResponseEntity<List<Event>> getAll() 
    {
        try
        {
            List<Event> obj = es.getAll();
            return new ResponseEntity<>(obj,HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/event/update/{eventId}")
    public ResponseEntity<Event> putMethod(@PathVariable("eventId") int eventId, @RequestBody Event ev) {
        
        if(es.updateEvent(eventId,ev) == true)
        {
            return new ResponseEntity<>(ev,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
 
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/event/delete/{eventId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable("eventId") int eventId)
    {
        if(es.deleteEvent(eventId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
    
}
