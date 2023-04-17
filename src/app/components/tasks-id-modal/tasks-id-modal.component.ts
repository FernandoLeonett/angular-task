import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-taskidfilter',
  templateUrl: './tasks-id-modal.component.html',
  styleUrls: ['./tasks-id-modal.component.css']
})
export class TaskIdFilterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TaskIdFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form?.valid) {
      this.dialogRef.close(this.form.get('id')?.value);
    }
  }
  
}
