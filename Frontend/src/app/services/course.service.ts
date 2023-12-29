import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../models/course";


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseurl = 'http://localhost:8084/courses'

  constructor(private http: HttpClient) {
  }

  public addCourse(course: FormData): Observable<Course> {
    return this.http.post<Course>(`${this.baseurl}/add`, course);
  }

  public findCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseurl}/${id}`);
  }

  getAll(): Observable<Course[]> {
    const url = `${this.baseurl}/all`;
    return this.http.get<Course[]>(url);
  }
  delete(id:number):Observable<Course> {
    return this.http.delete<Course>(`${this.baseurl}/${id}`)
  }

}
