package plateforme.bridge.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import plateforme.bridge.Entity.Course;
import plateforme.bridge.Repository.CourseRepository;
import plateforme.bridge.Service.CourseService;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }


    @Override
    public Course save(Course course) {
        if (course.getId() == null) {
            return courseRepository.save(course);
        } else {
            Optional<Course> CourseOptional = courseRepository.findById(course.getId());

            if (CourseOptional.isPresent()) {
                Course courses = CourseOptional.get();
                courses.setTitle(course.getTitle());
                courses.setDescription(course.getDescription());
                return courseRepository.save(courses);
            } else {
                return courseRepository.save(course);
            }
        }
    }

    @Override
    public void delete(Long id) {
        courseRepository.deleteById(id);
    }


}
