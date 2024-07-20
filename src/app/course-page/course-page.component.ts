import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Instructor } from '../store/common.models';
import { selectSelectedCourse } from '../store/instructor.selector';
import * as InstructorActions from '../store/instructor.actions';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  courseId: any = '';
  course: any;
  mainData: any;
  prevLessonId: number = 0;
  nextLessonId: number = 5;
  selectedCourse$: any;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ instructor: Instructor[] }>
  ) {
    this.selectedCourse$ = this.store.select(selectSelectedCourse);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.courseId = params.get('courseId');
      console.log('params id from course page what ****', this.courseId);
      //this.course = this.store.select(getCourseById(this.courseId));
      //this.store.dispatch(InstructorActions.loadCourse({courseId:this.courseId}));
      // this.apiService.getCourse(this.courseId).subscribe(data=>{
      //   this.course=data;
      // })
    });
    this.store.dispatch(
      InstructorActions.loadCourse({ courseId: this.courseId })
    );
    this.selectedCourse$.subscribe((data: any) => {
      this.course = data;
      const lessons = this.course.lessons;
      if (lessons && lessons.length > 0) {
        this.prevLessonId = lessons[0].lessonId;

        // Get the last lesson ID
        this.nextLessonId = lessons[lessons.length - 1].lessonId;
      }
    });
  }

  navigateToAddLesson() {}
}
