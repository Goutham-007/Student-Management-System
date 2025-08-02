package com.student.students.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.students.model.Studenttask;
import com.student.students.repository.Studentrepostiory;

@Service
public class Studentservice {
    @Autowired
    private Studentrepostiory studentrepostiory;

    public Studenttask creatNewStudenttask(Studenttask task) {
        return studentrepostiory.save(task);
    }

    public List<Studenttask> getAllStudenttasks() {
        return studentrepostiory.findAll();
    }

    public Studenttask findById(Long id) {
        return studentrepostiory.getById(id);
    }

    public void deleteStudenttask(Long id) {
        studentrepostiory.deleteById(id);
    }

    public Studenttask updateStudenttask(Studenttask task) {
        return studentrepostiory.save(task);
    }

}
