import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { CoursePageComponent } from './course-page/course-page.component';
import { LessonPageComponent } from './lesson-page/lesson-page.component';
import { StoreModule } from '@ngrx/store';
import { instructorReducer } from './store/instructor.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InstructorEffects } from './store/instructor.effects';
import { EffectsModule } from '@ngrx/effects';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddLessonPageComponent } from './add-lesson-page/add-lesson-page.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddInstructorComponent,
    UserListComponent,
    CoursePageComponent,
    LessonPageComponent,
    AddCourseComponent,
    AddLessonPageComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ instructor: instructorReducer }),
    EffectsModule.forRoot([InstructorEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
