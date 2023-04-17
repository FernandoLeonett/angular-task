import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, Observable } from 'rxjs';
import { Task, TaskCategory } from 'src/app/entity/Task';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { TaskService } from 'src/app/service/task.service.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  @Output() loadingChanged = new EventEmitter<void>();
  getCategoryString(cat: TaskCategory) {


    return cat.toString()
  }

  // private tasksSubscription: Subscription = new Subscription;
  displayedColumns: string[] = ['id', 'title', 'category', 'expiration', 'description', 'completed', 'actions'];

  constructor(
    private taskService: TaskService,
    public snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });


  }

  ediTdialog(task: Task): void {

    const dialogRef = this.dialog.open(EditTaskDialogComponent, {
      width: '400px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadingChanged.emit()

        try {
          this.taskService.updateTask(result)
          this.openSnackBar('Tarea actualizada con exito!', 'Close');
          console.log("result update", result)

        } catch (error) {
          this.openSnackBar(
            'Ha ocurrido un error actualizando la tarea',
            'Close'
          )

        } finally {
          this.loadingChanged.emit()
        }      }
    });
  }

  confirmDelete(task: Task): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: task
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.loadingChanged.emit()

        try {
          this.taskService.deleteTask(result)
          this.openSnackBar('Task deleted successfully!', 'Close');
        } catch (error) {
          this.openSnackBar(
            'Error deleting task. Please try again later.',
            'Close')
        } finally {

          this.loadingChanged.emit()

        }

      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, verticalPosition: "top"

    });
  }


}
