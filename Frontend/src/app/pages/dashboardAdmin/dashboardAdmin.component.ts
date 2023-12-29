import { Component } from '@angular/core';
import { Image } from '../../models/image';
import { HttpErrorResponse } from '@angular/common/http';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { NgForm } from '@angular/forms';
import {AjoutCoursComponent} from "../Ajout_Cours/ajout-cours.component";
import {MatDialog} from "@angular/material/dialog";
import Swal from "sweetalert2";


@Component({
  selector: 'app-dashboardAdmin',
  templateUrl: './dashboardAdmin.component.html',
  styleUrls: ['./dashboardAdmin.component.css'],
})
export class DashboardAdminComponent {
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

  constructor(private courseService: CourseService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadCourses();
  }

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


  prepareFormData(courses: Course): FormData {
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

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];


      const image: Image = {
        file: file,
        // @ts-ignore
        url: null
      }
      this.course.image = image;
    }
  }

  loadCourses() {
    this.courseService.getAll().subscribe(
        (data) => {
          this.courses = data;
        },
        (error) => {
          console.error('Error loading courses:', error);
        }
    );
  }

  openDialog() {
    this.dialog.open(AjoutCoursComponent);
  }

  deleteData(id: number) {
    if (id != undefined && id != null) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce course!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result: any) => {
        if (result.value) {
          this.courseService.delete(id).subscribe(res => {
            this.loadCourses()
          })
          Swal.fire(
              'Supprimé!',
              'Cours a été supprimé.',
              'success'
          )
        }

      })
    }
  }
}
