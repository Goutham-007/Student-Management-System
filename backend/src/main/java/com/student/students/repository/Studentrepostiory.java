package com.student.students.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.student.students.model.Studenttask;

@Repository
public interface Studentrepostiory extends JpaRepository<Studenttask, Long> {

}
