package com.springrest.springrest.dao;

import com.springrest.springrest.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDao extends JpaRepository<Student, String> {

}