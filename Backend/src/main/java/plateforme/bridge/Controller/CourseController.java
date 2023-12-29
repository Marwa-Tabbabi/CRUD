package plateforme.bridge.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import plateforme.bridge.Entity.Course;
import plateforme.bridge.Entity.File;
import plateforme.bridge.Service.CourseService;
import plateforme.bridge.ServiceImpl.FileServiceImpl;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private FileServiceImpl fileService;

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAll();
        return ResponseEntity.ok(courses);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        Course course = courseService.getCourseById(id);
        if (course != null) {
            return ResponseEntity.ok(course);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping(value = "/add", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Course saveCourse(@RequestPart("course") Course course,
                             @RequestPart("imageFile") MultipartFile file) {
        try {
            File images = uploadImage(file);
            course.setImage(images);
            Course newCourse= courseService.save(course);
            return  newCourse;
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Long id, @RequestBody Course course) {
        Course updatedCourse = courseService.save(course);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseService.delete(id);
        return ResponseEntity.noContent().build();
    }
    public File uploadImage(MultipartFile multipartFiles) throws IOException {
        File file = new File(
                multipartFiles.getOriginalFilename(),


                multipartFiles.getContentType(),
                multipartFiles.getBytes()
        );
        fileService.addFile(file);
        return file;
    }

}
