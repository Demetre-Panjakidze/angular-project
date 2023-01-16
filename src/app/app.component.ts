import { Component } from '@angular/core';

function capitalize(s:string) {
    return s[0].toUpperCase() + s.slice(1);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks_and_levels: any[] = [];

  taskName: string = "";
  selectedOption: string = "";
  options: string[] = ['easy', 'medium', 'hard'];

  addTask = () => {
    if(this.taskName && this.options.includes(this.selectedOption)) {
      this.tasks_and_levels.push([this.taskName, capitalize(this.selectedOption)]);
      this.taskName = "";
      this.selectedOption = "";
    }
  }

  deleteLi = (index: number) => {
    this.tasks_and_levels = this.tasks_and_levels.filter((_:unknown, i:unknown) => index !== i);
  }

  middle_tasks_and_levels: any[] = [];

  rightTransfer = (index: number) => {
    this.middle_tasks_and_levels.push([this.taskName, this.selectedOption]);
    console.log(this.middle_tasks_and_levels);
  }

  middleRightTransfer = (index:number) => {

  }

  leftTransfer = (index: number) => {
    
  }

  endLeftTransfer = (index: number) => {
    
  }
}