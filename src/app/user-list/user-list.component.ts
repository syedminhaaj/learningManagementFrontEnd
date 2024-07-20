import { Component, OnInit } from '@angular/core';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';

import * as InstructorActions from '../store/instructor.actions';
import { selectAllInstructors } from '../store/instructor.selector';
import { Course, Instructor } from '../store/common.models';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  instructors: any;
  displayedColumns: string[] = [
    'id',
    'name',
    'teachingExp',
    'email',
    'courses',
    'actions',
  ];
  innerDisplayedColumns: string[] = [
    'courseId',
    'courseName',
    'courseDuration',
    'viewLessons',
  ];
  color: string = 'deepSkyBlue';
  hoveredRowIndex: number | null = 1;

  constructor(
    private apiService: ApiService,
    public dialog: MatDialog,
    private router: Router,
    private store: Store<{ instructor: Instructor[] }>
  ) {
    // this.instructor$ = store.select('instructor');
  }

  ngOnInit(): void {
    this.store.dispatch(InstructorActions.loadData());
    this.store
      .select(selectAllInstructors)
      .pipe(
        map((dataObject: any) => dataObject)
        // assuming 'instructors' is the array in the data object
      )
      .subscribe((instructors: any[]) => {
        console.log('data---->', instructors);
        this.instructors = instructors;
      });
  }

  navigateToAddInstructor(): void {
    this.router.navigate(['/add-instructor']);
  }
  fetchData(): void {
    this.apiService.getData().subscribe((data) => {
      this.instructors = data;
    });
  }

  deleteUser(id: number): void {
    this.instructors = this.instructors.filter((user: any) => {
      if (user.id !== id) {
        this.apiService.DeleteInstructor(id).subscribe((resp) => {
          this.fetchData();
        });
      }
    });
  }

  viewCourse(couseId: any) {
    console.log('id is', couseId);
    //this.router.navigate(['/course-page'])
  }

  openDialog(): void {
    this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      disableClose: true, // Prevent closing by clicking outside or pressing escape
    });
  }

  navigateToCoursePage(username: any) {
    console.log('course is', username);
    this.router.navigate(['/add-course', username]);
  }
}
