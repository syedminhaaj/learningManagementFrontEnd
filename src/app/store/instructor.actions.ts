import { createAction, props } from '@ngrx/store';
import { Course, Instructor, Lesson } from './common.models';

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction(
  '[Data] Load Data Success',
  props<{ data: Instructor[] }>()
);
export const loadDataFailure = createAction(
  '[Data] Load Data Failure',
  props<{ error: any }>()
);

export const loadCourse = createAction(
  '[Course] Load Course',
  props<{ courseId: number }>()
);

export const loadCourseSuccess = createAction(
  '[Course] Load Course Success',
  props<{ course: Course }>()
);

export const loadCourseFailure = createAction(
  '[Course] Load Course Failure',
  props<{ error: any }>()
);

export const loadLesson = createAction(
  '[Course] Load Lesson',
  props<{ lessonId: number }>()
);

export const loadLessonSuccess = createAction(
  '[Course] Load Lesson Success',
  props<{ lesson: Lesson }>()
);

export const loadLessonFailure = createAction(
  '[Course] Load Lesson Failure',
  props<{ error: any }>()
);
