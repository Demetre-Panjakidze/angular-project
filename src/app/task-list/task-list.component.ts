import { Component, EventEmitter, Input, Output } from '@angular/core';
import { capitalize } from '../app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  message: any = 'List is empty';
  message1: unknown = true;
  message2: unknown = true;
  message3: unknown = true;
  @Input() start_tasks_and_levels: any[] = [];
  @Output() delete = new EventEmitter<number>();
  middle_tasks_and_levels: any[] = [];
  end_tasks_and_levels: any[] = [];
  
  deleteLi = (index: number) => {
    this.delete.emit(index);
  };

  addRight1 = (index: number) => {
    this.middle_tasks_and_levels.push({
      taskName: this.start_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0].taskName,
      difficulty: capitalize(
        this.start_tasks_and_levels.filter(
          (_: unknown, i: unknown) => index == i
        )[0].difficulty
      ),
    });
    this.start_tasks_and_levels.splice(index, 1);
    if (!this.start_tasks_and_levels.length) {
      this.message1 = this.message;
    }
    this.message2 = false;
  };

  addRight2 = (index: number) => {
    this.end_tasks_and_levels.push({
      taskName: this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0].taskName,
      difficulty: this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0].difficulty,
    });
    this.middle_tasks_and_levels.splice(index, 1);
    if (!this.middle_tasks_and_levels.length) {
      this.message2 = this.message;
    }
    this.message3 = false;
  };

  addLeft1 = (index: number) => {
    this.start_tasks_and_levels.push({
      taskName: this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0].taskName,
      difficulty: this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0].difficulty,
    });
    this.middle_tasks_and_levels.splice(index, 1);
    if (!this.middle_tasks_and_levels.length) {
      this.message2 = this.message;
    }
    this.message1 = false;
  };

  addLeft2 = (index: number) => {
    this.middle_tasks_and_levels.push(
      this.end_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0]
    );
    this.end_tasks_and_levels.splice(index, 1);
    if (!this.end_tasks_and_levels.length) {
      this.message3 = this.message;
    }
    this.message2 = false;
  };
}
