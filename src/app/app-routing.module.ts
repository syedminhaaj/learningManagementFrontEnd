import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserListComponent },
  { path: 'add-instructor', component: AddInstructorComponent },
  { path: 'course-page/:courseId', component: CoursePageComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
