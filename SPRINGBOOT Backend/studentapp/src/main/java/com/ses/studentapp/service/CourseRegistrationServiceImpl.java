package com.ses.studentapp.service;

import com.ses.studentapp.model.CourseRegistration;

import com.ses.studentapp.repository.CourseRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseRegistrationServiceImpl implements CourseRegistrationService {
    private final CourseRegistrationRepository courseRegistrationRepository;

    @Autowired
    public CourseRegistrationServiceImpl(CourseRegistrationRepository courseRegistrationRepository) { this.courseRegistrationRepository = courseRegistrationRepository; }

    @Override
    public CourseRegistration saveCourseRegistration(CourseRegistration courseRegistration) {
        return courseRegistrationRepository.save(courseRegistration);
    }

}
