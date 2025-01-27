// effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as InstructorActions from './instructor.actions';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Injectable()
export class InstructorEffects {
  private baseUrl = 'http://localhost:8080';
  private addInstructorUrl = 'http://localhost:8080/saveInstructor';
  private viewCourseUrl = 'http://localhost:8080/viewCourse';
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {}

  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.loadData),
      mergeMap(() =>
        this.apiService.getData().pipe(
          map((data) => InstructorActions.loadDataSuccess({ data })),
          catchError((error) =>
            of(InstructorActions.loadDataFailure({ error }))
          )
        )
      )
    )
  );

  // Another effect for loading all new courses
  loadCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.loadCourse),
      switchMap(({ courseId }) =>
        this.apiService.getCourse(courseId).pipe(
          map((course) => InstructorActions.loadCourseSuccess({ course })),
          catchError((error) =>
            of(InstructorActions.loadCourseFailure({ error }))
          )
        )
      )
    )
  );

  // Another effect for loading all lessons
  loadLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.loadLesson),
      switchMap(({ lessonId }) =>
        this.apiService.getLessonById(lessonId).pipe(
          map((lesson) => InstructorActions.loadLessonSuccess({ lesson })),
          catchError((error) =>
            of(InstructorActions.loadLessonFailure({ error }))
          )
        )
      )
    )
  );

  // Another effect for loading all lessons
  loadInstructorNameList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.loadInstructorNameList),
      mergeMap(() =>
        this.apiService.getInstructorList().pipe(
          map((instructorList) =>
            InstructorActions.loadInstructorNameListSuccess({ instructorList })
          ),
          catchError((error) =>
            of(InstructorActions.loadInstructorNameListFailure({ error }))
          )
        )
      )
    )
  );

  //Add course effect method
  addCourseEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.addCourse),
      switchMap(({ course }) =>
        this.apiService.addCourse(course).pipe(
          map((course) => InstructorActions.addCourseSuccess({ course })),
          catchError((error) =>
            of(InstructorActions.loadCourseFailure({ error }))
          )
        )
      )
    )
  );

  //Add lesson new effect method
  addLessonEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.addLesson),
      switchMap(({ lesson }) =>
        this.apiService.addLesson(lesson).pipe(
          map((course) => InstructorActions.addLessonSuccess({ lesson })),
          catchError((error) =>
            of(InstructorActions.addLessonFailure({ error }))
          )
        )
      )
    )
  );
  //Add new instructor
  addInstructorEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InstructorActions.addInstructor),
      switchMap(({ instructor }) =>
        this.apiService.saveInstructor(instructor).pipe(
          map((instructor) =>
            InstructorActions.addInstructorSuccess({ instructor })
          ),
          catchError((error) =>
            of(InstructorActions.addInstructorFailure({ error }))
          )
        )
      )
    )
  );
  //BELOW EFFECT METHOD WILL REDIRECT TO INSTRUCTOR LIST ONCE THE INSTRUCTOR IS ADDED
  redirectAfterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          InstructorActions.addInstructorSuccess,
          InstructorActions.addCourseSuccess,
          InstructorActions.addLessonSuccess
        ),
        tap(() => this.router.navigate(['/users']))
      ),
    { dispatch: false }
  );
}
