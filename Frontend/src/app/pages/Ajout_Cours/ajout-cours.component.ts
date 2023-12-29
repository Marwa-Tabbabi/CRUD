import { Component } from '@angular/core';
import {Image} from "../../models/image";
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-Ajout_Cours',
  templateUrl: './ajout-cours.component.html',
  styleUrls: ['./ajout-cours.component.css']
})
export class AjoutCoursComponent {
  courses: Course[] = [];
  public course: Course = {
    id: 0,
    title: '',
    description: '',
    image: {
      file: new File([], ''),
      url: '',
    },
  };

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {  }

  add(addForm: NgForm) {
    const courseFormData = this.prepareFormData(this.course);
    this.courseService.addCourse(courseFormData).subscribe(
        (response: Course) => {
          window.location.reload();
        },
        (error: HttpErrorResponse) => {
          console.error('Add Course Error:', error);
          alert(error.message);
        }
    );
  }

  prepareFormData(courses: Course): FormData{
    const formData = new FormData();
    formData.append(
        'course',
        new Blob([JSON.stringify(courses)], {type: 'application/json'})
    );
    formData.append(
        'imageFile',
        courses.image.file,
        courses.image.file.name
    );
    return formData;
  }
  onFileSelected(event: any){
    if (event.target.files){
      const file = event.target.files[0];


      const image: Image = {
        file: file,
        // @ts-ignore
        url: null
      }
      this.course.image=image;
    }
  }

}
