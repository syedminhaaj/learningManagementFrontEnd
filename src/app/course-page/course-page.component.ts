import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit{
  courseId: any ="";
  course: any;

  constructor(private route: ActivatedRoute,private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("params",params)
      this.courseId = params.get('courseId');
console.log("course from id",this.courseId)    });
  this.course=this.apiService.getCourse(this.courseId);
  this.course.subscribe((im:any)=>{
    console.log("asdf",im);
  })
    
  
  // this.course.subscribe((data:any)=>{
  //   console.log('data from course',data)
  // })
  console.log("course",this.course);

}

}
