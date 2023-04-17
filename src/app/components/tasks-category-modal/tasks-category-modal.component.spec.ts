import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCategoryModalComponent } from './tasks-category-modal.component';

describe('TasksCategoryModalComponent', () => {
  let component: TasksCategoryModalComponent;
  let fixture: ComponentFixture<TasksCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksCategoryModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
