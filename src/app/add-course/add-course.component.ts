import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Instructor, selectDropdown } from '../store/common.models';
import * as InstructorActions from '../store/instructor.actions';
import { instructorNameListSelector } from '../store/instructor.selector';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  form: FormGroup;
  options: any = [];
  instructors: any[] | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ instructor: Instructor[] }>
  ) {
    this.form = this.fb.group({
      courseName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      instructorId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.dispatch(InstructorActions.loadInstructorNameList());
    this.store
      .select(instructorNameListSelector)
      .pipe(
        map((dataObject: any) => dataObject)
        // assuming 'instructors' is the array in the data object
      )
      .subscribe((instructors: any[]) => {
        this.options = instructors.map((item) => ({
          value: item.id,
          label: item.name,
        }));
      });

    console.log('options os', this.options);
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      this.store.dispatch(
        InstructorActions.addCourse({ course: this.form.value })
      );
    } else {
      console.log('Form is invalid');
    }
  }

  onClose(): void {
    //Dispatch common action to redict to dashboard page
    //this.store.dispatch(InstructorActions.addInstructorSuccess());
    console.log('Form Closed');
    this.router.navigate(['/users']);
  }
}
