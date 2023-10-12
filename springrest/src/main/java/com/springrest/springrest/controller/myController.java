package com.springrest.springrest.controller;

import com.springrest.springrest.entity.Student;
import com.springrest.springrest.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class myController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/courses")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<Student> getCourses(){

     return this.studentService.getStudents();
    }

    @GetMapping("/courses/{name}")
    public Student getCourse(@PathVariable String name){
        return this.studentService.getStudent(name);
    }

    @GetMapping("/get-rank/{name}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public int getRanks(@PathVariable String name){
        List<Student> students = studentService.findAllByOrderByScoreDesc();
        for (int i = 0; i < students.size(); i++) {
           if (students.get(i).getName().equals(name)) {
                return i + 1; // Rank is 1-based, so add 1 to the index.
            }
        }
        return -1;
    }

    @PostMapping("/courses")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Student addCourse(@RequestBody Student student){
        return  this.studentService.addStudent(student);
    }

    @PutMapping("/courses")
    public Student updateCourse(@RequestBody Student student){
        return this.studentService.updateStudent(student);
    }

    @DeleteMapping("/courses/{name}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String name){
        try{
            this.studentService.deleteStudent(name);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}