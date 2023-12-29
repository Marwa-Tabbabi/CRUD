import { Component } from '@angular/core';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ImageService} from "../../services/image.service";
import {map} from "rxjs";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  courses: Course[] = [];
  p: number = 1;
  public course: Course = {
    id: 0,
    title: '',
    description: '',
    image: {
      file: new File([], ''),
      url: '',
    },
  };

  constructor(private courseService: CourseService, private imageService: ImageService) {
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll()
        .pipe(
            map((x: any[], i) => x.map((course: Course) => this.imageService.createImage(course)))
        ).subscribe(
        (response: Course[]) => {
          this.courses = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
    );
  }
}
