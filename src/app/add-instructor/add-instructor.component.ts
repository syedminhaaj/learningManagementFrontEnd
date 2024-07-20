import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import * as InstructorActions from '../store/instructor.actions';
import { Instructor } from '../store/common.models';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css'],
})
export class AddInstructorComponent {
  instructorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private store: Store<{ instructor: Instructor[] }>
  ) {
    this.instructorForm = this.fb.group({
      name: ['', Validators.required],
      teachingExp: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.instructorForm.valid) {
      this.store.dispatch(
        InstructorActions.addInstructor({
          instructor: this.instructorForm.value,
        })
      );
      // Below code is replace using NgRX Effect method
      // this.apiService
      //   .saveInstructor(this.instructorForm.value)
      //   .subscribe(() => {
      //     this.router.navigate(['/users']);
      //   });
    }
  }

  onClose(): void {
    this.router.navigate(['/users']);
  }
}
