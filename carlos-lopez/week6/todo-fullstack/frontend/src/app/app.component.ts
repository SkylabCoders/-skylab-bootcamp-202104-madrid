/* eslint-disable no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-extraneous-dependencies */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// eslint-disable-next-line import/prefer-default-export
export class AppComponent implements OnInit, AfterViewInit {
  refresh$ = new Subject();

  fetchTasks$!: Observable<any>;

  // eslint-disable-next-line no-unused-vars
  constructor(public taskService: TaskService) {}

  ngOnInit() {
    this.fetchTasks$ = this.refresh$
      .pipe(
        switchMap(() => this.taskService.fetchTasks()),
      );
  }

  ngAfterViewInit() {
    this.refresh$.next();
  }

  addTask(value: string) {
    this.taskService.addTask(value)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  delete(id: string) {
    this.taskService.deleteTask(id)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }

  update(id: string, description: string) {
    if (!description.trim()) {
      return;
    }
    this.taskService.updateTask(id, description)
      .pipe(
        tap(() => this.refresh$.next()),
      )
      .subscribe();
  }
}
