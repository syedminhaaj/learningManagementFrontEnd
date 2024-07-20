import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { AddLessonPageComponent } from './add-lesson-page/add-lesson-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-instructor', component: AddInstructorComponent },
  { path: 'course-page/:courseId', component: CoursePageComponent },
  { path: 'lesson-page/:lessonId', component: LessonPageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-course/:userId', component: AddCourseComponent },
  { path: 'add-lesson/:courseId', component: AddLessonPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
