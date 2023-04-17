import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task, TaskCategory } from 'src/app/entity/Task';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit{
  taskForm: FormGroup;
  categories: (string | TaskCategory)[] = Object.values(TaskCategory);

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      title: [data.title || '', [Validators.required, Validators.minLength(3)]],
      category: [data.category || '', [Validators.required]],
      expiration: [data.expiration || '', [Validators.required, this.futureDateValidator]],
      description: [data.description || '', [Validators.required, Validators.minLength(3)]],
      completed: [data.completed || false, [Validators.required]],
      _id:data._id
    });
  }
  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onSaveClick(): void {
    if (this.taskForm.valid) {
      this.dialogRef.close(this.taskForm.value);
    }
  }

  futureDateValidator(control: { value: string | number | Date; }): { [s: string]: boolean } | null {
    if (control.value) {
      const date = new Date(control.value);
      const today = new Date();
      if (date.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
        return { pastDate: true };
      }
    }
    return null;
  }
}
