import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/entity/Task';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {


  task: Task
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.task = data





  }
  ngOnInit(): void {
    console.log('first', this.data)
  }

  onDeleteClickConfirm() { 
  this.dialogRef.close(this.data._id);
  console.log("ha debido borrar", this.data)
  }
  onCancelClick(): void {
    this.dialogRef.close(null);
   console.log("no se borro nada",this.data)





  }
}