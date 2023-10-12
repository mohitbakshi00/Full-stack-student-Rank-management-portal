package com.springrest.springrest.services;

import com.springrest.springrest.entity.Student;

import java.util.List;

public interface StudentService {

    public List<Student> getStudents();

    public Student getStudent(String name);

    public Student addStudent(Student student);

    public Student updateStudent(Student student);

    public void deleteStudent(String name);

    public List<Student> findAllByOrderByScoreDesc();
}