import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';
  private addInstructorUrl = 'http://localhost:8080/saveInstructor';
  private viewCourseUrl='http://localhost:8080/viewCourse'


  constructor(private http: HttpClient) { }

  // Example GET request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAll`);
  }

  // Example POST request
  saveInstructor(data: any): Observable<any> {

    return this.http.post<any>(this.addInstructorUrl, data);
  }

  DeleteInstructor(id:number): Observable<any>{
    const url = `${this.baseUrl}/${id}`;
    console.log("what is deleted or not",id)
    return this.http.delete(url, { responseType: 'text' });
  }

  getCourse(id:number){
    const url = `${this.viewCourseUrl}?courseId=${id}`;
    return this.http.get(url);
  }
}
