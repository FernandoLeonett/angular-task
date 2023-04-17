import { Component } from '@angular/core';
import { TaskService } from './service/task.service.service';
import { Task } from './entity/Task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading :Boolean = false



  onLoadingChanged(){
    this.isLoading = !this.isLoading

    console.log("asi quedo el loader", this.isLoading)
    
  }
  // tasks: Task[] = [];
  // totalTasks: number = 0;
  // totalCompletedTasks: number = 0;

  constructor(private taskService: TaskService) {}




//   deleteTask(task: Task) {
//     this.taskService.deleteTask(task._id);
//     this.updateTotals();
//   }

//   private updateTotals() {
//     this.totalTasks = this.tasks.length;
//     this.totalCompletedTasks = this.tasks.filter(task => task.completed).length;
//   }
}
