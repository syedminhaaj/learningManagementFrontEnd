import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLessonPageComponent } from './add-lesson-page.component';

describe('AddLessonPageComponent', () => {
  let component: AddLessonPageComponent;
  let fixture: ComponentFixture<AddLessonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLessonPageComponent]
    });
    fixture = TestBed.createComponent(AddLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
