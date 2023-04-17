import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, TaskCategory } from 'src/app/entity/Task';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {
  
  today: Date = new Date(); // Declaración de la propiedad 'today'

  categories:(string | TaskCategory)[]= Object.values(TaskCategory);
  taskForm!: FormGroup;
  minDate: Date = new Date();


  constructor(
    private dialogRef: MatDialogRef<AddTaskDialogComponent>,
    private formBuilder: FormBuilder
) {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      expiration: ['', [Validators.required, this.futureDateValidator()]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      completed: [false]
    });
}

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.taskForm && this.taskForm.valid) {
      const task: Partial<Task> = {
        
        title: this.taskForm.value.title,
        category: this.taskForm.value.category,
        expiration: this.taskForm.value.expiration,
        description: this.taskForm.value.description,
        completed: this.taskForm.value.completed
      };
      this.dialogRef.close(task);

      console.log("Tarea agregada", task)
    }
  }
  setMinDate(): void {
    const currentDate = new Date();
    this.minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const selectedDate = event.value ?? new Date(); // si es nulo, se usa la fecha actual
    this.taskForm.controls['expiration'].setValidators([
      Validators.required,
      Validators.min(selectedDate.getTime())
    ]);
    this.taskForm.controls['expiration'].updateValueAndValidity();
  }
  

  

  onCancel(): void {
    this.dialogRef.close(null);
  }

  futureDateValidator() {
    return (control: { value: string | number | Date; }) => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      return selectedDate > currentDate ? null : { pastDate: true };
    };
  }
}
