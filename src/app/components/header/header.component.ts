import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { TasksCategoryModalComponent } from '../tasks-category-modal/tasks-category-modal.component';
import { TaskIdFilterComponent } from '../tasks-id-modal/tasks-id-modal.component';
import { TaskService } from 'src/app/service/task.service.service';
import { Task } from 'src/app/entity/Task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {


  @Output() loadingChanged = new EventEmitter<void>();
  isSmallScreen: boolean=false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog, private taskService: TaskService, private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }

  openAddTaskDialog() {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result:Task) => {
      if (result) {
        this.loadingChanged.emit()

        try {
          this.taskService.addTask(result)
          this.openSnackBar('Task added successfully!', 'Close');
        } catch (error) {
          this.openSnackBar(
            'Error adding task. Please try again later.',
            'Close')
        } finally {

          this.loadingChanged.emit()

        }

      }
    });
  }

 

  openModalFilterbyId() {
    const dialogRef = this.dialog.open(TaskIdFilterComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('ID: ', result);
        // Realizar el filtro de tareas por id aquí
      }
    });
  }

 
  

  openModalFilterbyCategoria() {
    const dialogRef = this.dialog.open(TasksCategoryModalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Categoría: ', result);
        // Realizar el filtro de tareas por categoría
      }
    });
  }

  


  private openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000, verticalPosition: "top"

    });
  }


}