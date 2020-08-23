import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TodoFacade } from '../../store/todo.facade';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  loading$ = this.todoService.loading$;
  todos$ = this.todoService.todos$;

  constructor(private todoService: TodoFacade) {}

  ngOnInit(): void {
    this.todoService.loadAll();
  }

  create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false;
    todo.createdAt = Math.floor(date.getTime() / 1000);
    todo.updatedAt = Math.floor(date.getTime() / 1000);
    this.todoService.create(todo);
  }
  update(todo: Todo) {
    this.todoService.update(todo);
  }
  remove(id: number) {
    this.todoService.remove(id);
  }

}
