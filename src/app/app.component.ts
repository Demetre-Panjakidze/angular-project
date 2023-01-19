import { Component } from '@angular/core';

export function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  start_tasks_and_levels: any[] = [];
  message: any = 'List is empty';
  message1: unknown = true;
  
  tasksAddHandler(obj: any) {
    this.start_tasks_and_levels.push(obj);
  }

  tasksDeleteHandler = (index: number) => {
    this.start_tasks_and_levels = this.start_tasks_and_levels.filter(
      (_: unknown, i: unknown) => index !== i
    );
    if (!this.start_tasks_and_levels.length) {
      this.message1 = this.message;
    }
  };
}