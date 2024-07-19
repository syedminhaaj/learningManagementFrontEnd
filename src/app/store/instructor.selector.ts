// instructor.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Instructor } from './common.models';
import { State } from './instructor.reducer';

export const selectInstructorState = createFeatureSelector<State>('instructor');

export const selectAllInstructors = createSelector(
  selectInstructorState,
  (state: State) => state.data // assuming 'data' is the object containing the array
);

export const instructorNameListSelector = createSelector(
  selectInstructorState,
  (state: State) => state.instructorList // assuming 'data' is the object containing the array
);
export const getCourseById = (id: number) =>
  createSelector(selectInstructorState, (state: State) =>
    state.data.find((instructor: Instructor) => instructor.id === id)
  );

export const selectSelectedCourse = createSelector(
  selectInstructorState,
  (state: State) => state.selectedCourse
);

export const selectSelectedLesson = createSelector(
  selectInstructorState,
  (state: State) => state.selectedLesson
);
