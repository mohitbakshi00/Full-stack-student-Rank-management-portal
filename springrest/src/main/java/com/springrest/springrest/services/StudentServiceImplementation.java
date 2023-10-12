package com.springrest.springrest.services;

import com.springrest.springrest.dao.StudentDao;
import com.springrest.springrest.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService {

  @Autowired
  private StudentDao studentDao;

  public StudentServiceImplementation(){

  }
    @Override
    public List<Student> getStudents() {

        return studentDao.findAll();
    }

    @Override
    public Student getStudent(String name) {

      return studentDao.findById(name).get();
    }

    @Override
    public Student addStudent(Student student) {
       if(student.getScore() >=30){
        student.setIspassed("Passed");
       }
       else {
         student.setIspassed("Failed");
       }
       studentDao.save(student);
       return student;
    }

    @Override
    public Student updateStudent(Student student){

      studentDao.save(student);
      return student;
    }

    @Override
    public void deleteStudent(String name){

      Student entity = studentDao.findById(name).get();
      studentDao.delete(entity);
    }

    @Override
  public List<Student> findAllByOrderByScoreDesc(){
      return studentDao.findAll(Sort.by(Sort.Direction.DESC, "score"));
    }
}