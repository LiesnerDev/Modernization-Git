import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask(): void {
    const task = this.newTask.trim();
    if (task) {
      this.tasks.push(task);
      this.newTask = '';
    }
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
