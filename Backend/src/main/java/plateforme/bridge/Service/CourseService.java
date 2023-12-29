package plateforme.bridge.Service;

import plateforme.bridge.Entity.Course;

import java.util.List;

public interface CourseService {
    List<Course> getAll();
    Course getCourseById(Long id);
    Course save(Course course);

    void delete(Long id);
}
