import { Component } from '@angular/core';
import { ToDoDetailType } from './types/to-do-detail.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-app';
  toDoList:ToDoDetailType[] = [];
  onToDoAdded(ev:ToDoDetailType){
    this.toDoList.push(ev);
  }
}
