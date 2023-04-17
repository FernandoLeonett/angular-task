import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, Inject } from '@angular/core';
import { TaskCategory } from "src/app/entity/Task";

@Component({
  selector: 'app-tasks-category-modal',
  templateUrl: './tasks-category-modal.component.html',
  styleUrls: ['./tasks-category-modal.component.css']
})
export class TasksCategoryModalComponent implements OnInit {
  form: FormGroup;
  categories: string[] 


  getEnumValues<T extends object>(e: T): string[] {
    return Object.values(e).filter(value => typeof value === 'string') as string[];
  }
  
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TasksCategoryModalComponent>,
    
  ) {
    this.form = this.formBuilder.group({
      category: ['', Validators.required]
    });
    this.categories = this.getEnumValues(TaskCategory)
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form?.valid) {
      this.dialogRef.close(this.form.get('category')?.value);
    }
  }
}
