import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  InstructorName: string | null | undefined;
  assignedInstructorName: string | null | undefined;
  instructorIdFromUserList: number | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<{ instructor: Instructor[] }>
  ) {
    this.form = this.fb.group({
      courseName: ['', Validators.required],
      courseDuration: ['', Validators.required],
      instructorId: [''],
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
    this.route.queryParams.subscribe((params) => {
      console.log('user', params);
      this.assignedInstructorName = params['username'];
      this.instructorIdFromUserList = params['userId'];
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted with values', this.form.value);
      if (this.assignedInstructorName) {
        this.form.patchValue({
          instructorId: this.instructorIdFromUserList,
        });
      }
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
