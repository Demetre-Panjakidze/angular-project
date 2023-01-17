import { Component } from '@angular/core';

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  start_tasks_and_levels: any[] = [];
  middle_tasks_and_levels: any[] = [];
  end_tasks_and_levels: any[] = [];

  message: string = 'List is empty';
  message1: unknown = true;
  message2: unknown = true;
  message3: unknown = true;
  taskName: string = '';
  selectedOption: string = '';
  options: string[] = ['easy', 'medium', 'hard'];

  addTask = () => {
    if (this.taskName && this.options.includes(this.selectedOption)) {
      this.start_tasks_and_levels.push([
        this.taskName,
        capitalize(this.selectedOption),
      ]);
      this.taskName = '';
      this.selectedOption = '';
      this.message1 = false;
    }
  };

  deleteLi = (index: number) => {
    this.start_tasks_and_levels = this.start_tasks_and_levels.filter(
      (_: unknown, i: unknown) => index !== i
    );
    if (!this.start_tasks_and_levels.length) {
      this.message1 = this.message;
    }
  };

  addRight1 = (index: number) => {
    this.middle_tasks_and_levels.push(
      this.start_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0]
    );
    this.start_tasks_and_levels.splice(index, 1);
    if (!this.start_tasks_and_levels.length) {
      this.message1 = this.message;
    }
    this.message2 = false;
  };

  addRight2 = (index: number) => {
    this.end_tasks_and_levels.push(
      this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0]
    );
    this.middle_tasks_and_levels.splice(index, 1);
    if (!this.middle_tasks_and_levels.length) {
      this.message2 = this.message;
    }
    this.message3 = false;
  };

  addLeft1 = (index: number) => {
    this.start_tasks_and_levels.push(
      this.middle_tasks_and_levels.filter(
        (_: unknown, i: unknown) => index == i
      )[0]
    );
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
