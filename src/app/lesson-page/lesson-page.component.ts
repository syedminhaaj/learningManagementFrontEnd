import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Instructor } from '../store/common.models';
import { selectSelectedLesson } from '../store/instructor.selector';
import * as InstructorActions from '../store/instructor.actions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrls: ['./lesson-page.component.css'],
})
export class LessonPageComponent implements OnInit {
  lessonId: any = '';
  selectedCourse$: any;
  lessonData: any;
  safeLink: any;
  prevLessonId: number = 0;
  nextLessonId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ instructor: Instructor[] }>,
    private router: Router
  ) {
    this.selectedCourse$ = this.store.select(selectSelectedLesson);
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.lessonId = params.get('lessonId');
      console.log('lesson id is -->', this.lessonId);
      //this.course = this.store.select(getCourseById(this.courseId));
      //this.store.dispatch(InstructorActions.loadCourse({courseId:this.courseId}));
      // this.apiService.getCourse(this.courseId).subscribe(data=>{
      //   this.course=data;
      // })
    });
    this.route.queryParams.subscribe((params) => {
      this.prevLessonId = +params['prev'] || 0;
      this.nextLessonId = +params['next'] || 0;
      console.log('what is both', this.prevLessonId, this.nextLessonId);
    });

    this.dispatchAction(this.lessonId);
  }
  nextLesson(id: number) {
    const newLessonId = id + 1;
    this.router.navigate([`/lesson-page/${newLessonId}`]);
    this.dispatchAction(newLessonId);
  }

  previousLesson(id: number) {
    const prevLessonId = id - 1;
    this.router.navigate([`/lesson-page/${prevLessonId}`]);
    this.dispatchAction(prevLessonId);
  }
  dispatchAction(id: number) {
    this.store.dispatch(InstructorActions.loadLesson({ lessonId: id }));
    this.selectedCourse$.subscribe((data: any) => {
      this.lessonData = data;
    });
  }
  showPrevBtn() {
    return this.lessonData.lessonId > this.prevLessonId;
  }
  showNextLessonBtn() {
    return this.lessonData.lessonId < this.nextLessonId;
  }
}
