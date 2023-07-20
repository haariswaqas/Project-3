package com.ses.studentapp.controller;


import com.ses.studentapp.model.CourseRegistration;
import com.ses.studentapp.service.CourseRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/course_registration")
public class CourseRegistrationController {
    @Autowired
    private CourseRegistrationService courseRegistrationService;

    @PostMapping("/add")
    public String add(@RequestBody CourseRegistration courseRegistration){
        courseRegistrationService.saveCourseRegistration(courseRegistration);
        return "Student Has Registered for a Course";
    }

}
