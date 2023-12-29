package plateforme.bridge.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import plateforme.bridge.Entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
