import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './store/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080';
  private addInstructorUrl = 'http://localhost:8080/saveInstructor';
  private viewCourseUrl = 'http://localhost:8080/viewCourse';

  private prodbaseUrl =
    'https://learningmanagement-be-production.up.railway.app';

  constructor(private http: HttpClient) {}

  // Example GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.prodbaseUrl}/getAll`);
  }

  // Example POST request
  saveInstructor(data: any): Observable<any> {
    return this.http.post<any>(this.addInstructorUrl, data);
  }

  DeleteInstructor(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    console.log('what is deleted or not', id);
    return this.http.delete(url, { responseType: 'text' });
  }

  getCourse(id: number): Observable<any> {
    const url = `${this.viewCourseUrl}?courseId=${id}`;
    return this.http.get(url);
  }

  addCourse(courseData: Course): Observable<any> {
    const url = `${this.baseUrl}/saveCourse`;
    return this.http.post<any>(url, courseData);
  }

  getLessonById(id: number): Observable<any> {
    const url = `${this.baseUrl}/viewLesson?lessonId=${id}`;
    return this.http.get(url);
  }

  getInstructorList(): Observable<any> {
    const url = `${this.baseUrl}/instructor-list`;
    return this.http.get(url);
  }
}
