import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Instructor } from '../store/common.models';
import * as InstructorActions from '../store/instructor.actions';

@Component({
  selector: 'app-add-lesson-page',
  templateUrl: './add-lesson-page.component.html',
  styleUrls: ['./add-lesson-page.component.css'],
})
export class AddLessonPageComponent implements OnInit {
  courseId: string | null | undefined;
  courseName: string | undefined;
  lesson = {
    lessonText: '',
    lessonName: '',
    link: '',
    courseId: '',
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ instructor: Instructor[] }>
  ) {}
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.route.queryParams.subscribe((params) => {
      this.courseName = params['courseName'];

      console.log('what is both', this.courseName);
    });
  }

  onSubmit() {
    // Handle form submission
    console.log('Lesson submitted', this.lesson);
    if (this.courseId) {
      this.lesson.courseId = this.courseId;
    }
    this.store.dispatch(InstructorActions.addLesson({ lesson: this.lesson }));
  }

  onCancel() {
    // Handle form cancellation
    this.lesson = {
      lessonText: '',
      lessonName: '',
      link: '',
      courseId: '',
    };
  }
}
