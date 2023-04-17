import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; // Importa MatIconModule

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskIdFilterComponent } from './components/tasks-id-modal/tasks-id-modal.component';


import { MatToolbarModule } from '@angular/material/toolbar';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import { AddTaskDialogComponent } from './components/add-task-dialog/add-task-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';


import { MatRadioModule } from '@angular/material/radio';


import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';

import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { TasksCategoryModalComponent } from './components/tasks-category-modal/tasks-category-modal.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';


import { LayoutModule } from '@angular/cdk/layout';
import { TableModuleComponent } from './components/table-module/table-module.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,

    HeaderComponent,

    AddTaskDialogComponent,
    EditTaskDialogComponent, TaskIdFilterComponent,

    ConfirmDialogComponent,
  
    
    TasksCategoryModalComponent,
    
    



  ],
  imports: [LayoutModule, MatRadioModule,MatProgressSpinnerModule ,

    FormsModule,HttpClientModule,
    TableModuleComponent, MatIconModule, MatSnackBarModule,
    MatInputModule,
    MatButtonModule, ReactiveFormsModule,
    BrowserAnimationsModule, MatToolbarModule, MatDialogModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatMenuModule

  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
