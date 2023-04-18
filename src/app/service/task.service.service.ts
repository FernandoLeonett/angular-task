import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../entity/Task';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  private baseUrl = 'http://localhost:3000/api/tasks';
  

  constructor(private http: HttpClient) {
    this.getTasks()
    console.log("instnnciado el servicio")
  }

  // updateTasks(tasks: Task[]): void {
  //   this.tasksSubject.next(tasks);
  // }

  addTask(task: Task): void {
    this.http.post<Task>(`${this.baseUrl}`, task)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(error);
        })
      )
      .subscribe(() => {
        this.getTasks();
      });
  }

  deleteTask(id: string): void {
    this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(error);
        })
      )
      .subscribe(() => {
        this.getTasks();
      });
  }

  updateTask(task: Task): void {
    this.http.put<Task>(`${this.baseUrl}/${task._id}`, task)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(error);
        })
      )
      .subscribe(() => {
        this.getTasks();
      });
  }

  getTasksByCompletionStatus(completed: string): Observable<Task[]> {
    const params = new HttpParams().set('completed', completed);
    return this.http.get<Task[]>(this.baseUrl, { params })
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      );
  }
  
  // getTasksByCompleteStatus(status: string): void {
  //   this.http
  //     .get<Task[]>(`${this.baseUrl}/status?completed=${status}`)
  //     .pipe(
  //       catchError((error) => {
  //         console.error(error);
  //         return of([]);
  //       })
  //     )
  //     .subscribe((tasks) => {
  //       this.tasksSubject.next(tasks);
  //     });
  
  // }
  

  getTasksByTitle(title: string): void {
    this.http.get<Task[]>(`${this.baseUrl}/title?title=${title}`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((tasks) => {
        this.tasksSubject.next(tasks);
      });
  }

  getTasksByDateRange(start: string, end: string): void {
    this.http.get<Task[]>(`${this.baseUrl}/date-range?start=${start}&end=${end}`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((tasks) => {
        this.tasksSubject.next(tasks);
      });
  }

  // getTasksByDescription(description: string): void {
  //   this.http.get<Task[]>(`${this.baseUrl}/description?description=${description}`)
  //     .pipe(
  //       catchError((error) => {
  //         console.error(error);
  //         return of([]);
  //       })
  //     )
  //     .subscribe((tasks) => {
  //       this.tasksSubject.next(tasks);
  //     });
  // }

  private getTasks(): void {
    this.http.get<Task[]>(`${this.baseUrl}`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((tasks) => {
        this.tasksSubject.next(tasks);
      });
  }
}
