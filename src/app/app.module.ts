import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './store/todo/todo.effects';
import {TodoReducer} from './store/todo/todo.reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    StoreModule.forRoot({todo: TodoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
