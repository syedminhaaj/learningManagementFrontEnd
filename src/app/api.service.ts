import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, Lesson } from './store/common.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // based url for local
  //private baseUrl = 'http://localhost:8080';

  // baseURL from railcloud
  private baseUrl = 'https://learningmanagement-be-production.up.railway.app';

  private addInstructorUrl = 'http://localhost:8080/saveInstructor';
  private viewCourseUrl = 'http://localhost:8080/viewCourse';

  private prodbaseUrl =
    'https://learningmanagement-be-production.up.railway.app';

  constructor(private http: HttpClient) {}

  // Example GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAll`);
  }

  // Example POST request
  saveInstructor(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/saveInstructor`, data);
  }

  DeleteInstructor(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    console.log('what is deleted or not', id);
    return this.http.delete(url, { responseType: 'text' });
  }

  getCourse(id: number): Observable<any> {
    const url = `${this.baseUrl}/viewCourse?courseId=${id}`;
    return this.http.get(url);
  }

  addCourse(courseData: Course): Observable<any> {
    const url = `${this.baseUrl}/saveCourse`;
    return this.http.post<any>(url, courseData);
  }

  addLesson(lessonData: Lesson): Observable<any> {
    const url = `${this.baseUrl}/saveLesson`;
    return this.http.post<any>(url, lessonData);
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
