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
  
  tasksAddHandler(obj: any) {
    this.start_tasks_and_levels.push(obj);
  }
}

