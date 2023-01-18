import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  start_tasks_and_levels: any[] = [];

  tasksAddHandler(obj: any){
    this.start_tasks_and_levels.push(obj)
  };

  middle_tasks_and_levels: any[] = [];
  end_tasks_and_levels: any[] = [];

  message: any = 'List is empty';
  message1: unknown = true;
  message2: unknown = true;
  message3: unknown = true;

  deleteLi = (index: number) => {
    this.start_tasks_and_levels = this.start_tasks_and_levels.filter(
      (_: unknown, i: unknown) => index !== i
    );
    if (!this.start_tasks_and_levels.length) {
      this.message1 = this.message;
    }
  };

  // addRight1 = (index: number) => {
  //   this.middle_tasks_and_levels.push(
  //     this.start_tasks_and_levels.filter(
  //       (_: unknown, i: unknown) => index == i
  //     )[0]
  //   );
  //   this.start_tasks_and_levels.splice(index, 1);
  //   if (!this.start_tasks_and_levels.length) {
  //     this.message1 = this.message;
  //   }
  //   this.message2 = false;
  // };

  // addRight2 = (index: number) => {
  //   this.end_tasks_and_levels.push(
  //     this.middle_tasks_and_levels.filter(
  //       (_: unknown, i: unknown) => index == i
  //     )[0]
  //   );
  //   this.middle_tasks_and_levels.splice(index, 1);
  //   if (!this.middle_tasks_and_levels.length) {
  //     this.message2 = this.message;
  //   }
  //   this.message3 = false;
  // };

  // addLeft1 = (index: number) => {
  //   this.start_tasks_and_levels.push(
  //     this.middle_tasks_and_levels.filter(
  //       (_: unknown, i: unknown) => index == i
  //     )[0]
  //   );
  //   this.middle_tasks_and_levels.splice(index, 1);
  //   if (!this.middle_tasks_and_levels.length) {
  //     this.message2 = this.message;
  //   }
  //   this.message1 = false;
  // };

  // addLeft2 = (index: number) => {
  //   this.middle_tasks_and_levels.push(
  //     this.end_tasks_and_levels.filter(
  //       (_: unknown, i: unknown) => index == i
  //     )[0]
  //   );
  //   this.end_tasks_and_levels.splice(index, 1);
  //   if (!this.end_tasks_and_levels.length) {
  //     this.message3 = this.message;
  //   }
  //   this.message2 = false;
  // };

  moveItem(source: any[], destination: any[], index: number) {
    destination.push(source[index]);
    source.splice(index, 1);
    this.message1 = !this.start_tasks_and_levels.length;
    this.message2 = !this.middle_tasks_and_levels.length;
    this.message3 = !this.end_tasks_and_levels.length;
  }

  addRight1(index: number) {
    this.moveItem(this.start_tasks_and_levels, this.middle_tasks_and_levels, index);
  }

  addRight2(index: number) {
    this.moveItem(this.middle_tasks_and_levels, this.end_tasks_and_levels, index);
  }

  addLeft1(index: number) {
    this.moveItem(this.middle_tasks_and_levels, this.start_tasks_and_levels, index);
  }

  addLeft2(index: number) {
    this.moveItem(this.end_tasks_and_levels, this.middle_tasks_and_levels, index);
  }
}
