import { Component, EventEmitter, Output } from '@angular/core';

function capitalize(s: string) {
  return s[0].toUpperCase() + s.slice(1);
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  message1: unknown = true;
  taskName: string = '';
  selectedOption: string = '';
  options: string[] = ['easy', 'medium', 'hard'];

  @Output() taskAdd = new EventEmitter<any>();

  addTask = () => {
    if (this.taskName && this.options.includes(this.selectedOption)) {
      this.taskAdd.emit({taskName: this.taskName, difficulty: capitalize(this.selectedOption)});
      this.taskName = '';
      this.selectedOption = '';
      this.message1 = false;
    }
  };
}
