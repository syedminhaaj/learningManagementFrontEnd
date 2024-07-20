import { createAction, props } from '@ngrx/store';
import {
  Course,
  Instructor,
  InstructorOnlyNameList,
  Lesson,
} from './common.models';

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

export const loadInstructorNameList = createAction('[Course] Load Lesson');

export const loadInstructorNameListSuccess = createAction(
  '[Course] Load Lesson Success',
  props<{ instructorList: InstructorOnlyNameList[] }>()
);

export const loadInstructorNameListFailure = createAction(
  '[Course] Load Lesson Failure',
  props<{ error: any }>()
);
export const addCourse = createAction(
  '[Course] Add Course',
  props<{ course: Course }>()
);

export const addCourseSuccess = createAction(
  '[Course] Add Course Success',
  props<{ course: Course }>()
);

export const addCourseFailure = createAction(
  '[Course] Add Course Failure',
  props<{ error: any }>()
);

//Add Instructor action
export const addInstructor = createAction(
  '[Instructor] Add Instructor',
  props<{ instructor: Instructor }>()
);

export const addInstructorSuccess = createAction(
  '[Instructor] Add Instructor Success',
  props<{ instructor: Instructor }>()
);

export const addInstructorFailure = createAction(
  '[Instructor] Add Instructor Failure',
  props<{ error: any }>()
);

//Add Instructor action
export const addLesson = createAction(
  '[Lesson] Add Lesson',
  props<{ lesson: Lesson }>()
);

export const addLessonSuccess = createAction(
  '[Lesson] Add Lesson Success',
  props<{ lesson: Lesson }>()
);

export const addLessonFailure = createAction(
  '[Lesson] Add Lesson Failure',
  props<{ error: any }>()
);
