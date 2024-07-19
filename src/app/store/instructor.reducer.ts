// reducer.ts
import { createReducer, on } from '@ngrx/store';
import {
  Course,
  Instructor,
  InstructorOnlyNameList,
  Lesson,
} from './common.models';
import * as InstructorActions from './instructor.actions';

export interface State {
  data: Instructor[];
  selectedCourse: Course | null;
  selectedLesson: Lesson | null;
  instructorList: InstructorOnlyNameList[];
  error: any;
}

export const initialState: State = {
  data: [],
  selectedCourse: null,
  selectedLesson: null,
  instructorList: [],
  error: null,
};

export const instructorReducer = createReducer(
  initialState,
  on(InstructorActions.loadDataSuccess, (state, { data }) => ({
    ...state,
    data,
    error: null,
  })),
  on(InstructorActions.loadDataFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(InstructorActions.loadCourseSuccess, (state, { course }) => ({
    ...state,
    selectedCourse: course,
    error: null,
  })),
  on(InstructorActions.loadCourseFailure, (state, { error }) => ({
    ...state,
    selectedCourse: null,
    error,
  })),
  on(InstructorActions.loadLessonSuccess, (state, { lesson }) => ({
    ...state,
    selectedLesson: lesson,
    error: null,
  })),
  on(InstructorActions.loadLessonFailure, (state, { error }) => ({
    ...state,
    selectedLesson: null,
    error,
  })),
  on(
    InstructorActions.loadInstructorNameListSuccess,
    (state, { instructorList }) => ({
      ...state,
      instructorList: instructorList,
      error: null,
    })
  ),
  on(InstructorActions.loadInstructorNameListFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(InstructorActions.addCourseSuccess, (state, { course }) => ({
    ...state,
    selectedCourse: course,
    error: null,
  })),
  on(InstructorActions.addCourseFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
