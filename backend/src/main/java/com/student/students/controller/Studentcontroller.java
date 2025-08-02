package com.student.students.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.student.students.model.Studenttask;
import com.student.students.services.Studentservice;

@Controller
@RequestMapping("/api/student/task")
public class Studentcontroller {
    @Autowired
    private Studentservice studentservice;

    @GetMapping("/")
    public ResponseEntity<List<Studenttask>> getAllStudenttasks() {
        return ResponseEntity.ok(studentservice.getAllStudenttasks());
    }

    @PostMapping("/add")
    public ResponseEntity<Studenttask> createstudent(@RequestBody Studenttask task) {
        return ResponseEntity.ok(studentservice.creatNewStudenttask(task));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Studenttask> updatestudent(@PathVariable Long id, @RequestBody Studenttask task) {
        task.setId(id);
        return ResponseEntity.ok(studentservice.updateStudenttask(task));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteStudenttask(@PathVariable Long id) {
        studentservice.deleteStudenttask(id);
        return ResponseEntity.ok(true);
    }

}
