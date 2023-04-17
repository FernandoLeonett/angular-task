import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIdModalComponent } from './tasks-id-modal.component';

describe('TasksIdModalComponent', () => {
  let component: TasksIdModalComponent;
  let fixture: ComponentFixture<TasksIdModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksIdModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksIdModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
