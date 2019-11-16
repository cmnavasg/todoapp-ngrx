import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoListState } from './todo.state';

export const selectTodoState = createFeatureSelector<TodoListState>('todo');

export const selectAll = createSelector(
    selectTodoState,
    state => Object.values(state.todos)
);
