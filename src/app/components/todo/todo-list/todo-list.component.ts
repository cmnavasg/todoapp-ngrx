import { TodoListState, TodoState } from '../../../store/todo/todo.state';

import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';

import * as TodoAction from '../../../store/todo/todo.action';
import {Observable} from 'rxjs';
import * as TodoSelectors from '../../../store/todo/todo.selectors';

export interface AppState {

  todos: TodoListState;

}

@Component({

  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  constructor(
    private store: Store<TodoListState>
  ) {
 }

  todoListState$: Observable<TodoState[]>;

  ngOnInit() {
    this.todoListState$ = this.store.select(TodoSelectors.selectAll);
    this.store.dispatch(new TodoAction.GetTodos());
  }

  onCreate(todo) {
    console.log(todo);
    this.store.dispatch(new TodoAction.CreateTodo(todo));
  }


  onDelete(todo) {
    this.store.dispatch(new TodoAction.DeleteTodo(todo));
  }

  onEdit(todo) {
    this.store.dispatch(new TodoAction.UpdateTodo(todo));
  }

  completeTodo(todo) {
    this.store.dispatch(new TodoAction.CompleteTodo(todo));
  }
}
