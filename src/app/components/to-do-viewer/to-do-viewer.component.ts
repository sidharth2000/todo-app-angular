import { Component,Input } from '@angular/core';
import { ToDoDetailType } from 'src/app/types/to-do-detail.type';

@Component({
  selector: 'app-to-do-viewer',
  templateUrl: './to-do-viewer.component.html',
  styleUrls: ['./to-do-viewer.component.scss']
})
export class ToDoViewerComponent {
  @Input() toDoList:ToDoDetailType[] = [];

  priorityMap(priority:string){
    if(priority=='1')
      return 'LOW';
    else if(priority=='2')
      return 'MEDIUM';
    else if(priority=='3')
      return 'HIGH';
    else
      return '';
  } 

  sortDownName = false;

  onClickNameFilter(){
    if(this.sortDownName==true)
      this.sortDownName = false;
    else  
      this.sortDownName = true;
    if(this.sortDownName==true){
      this.toDoList.sort((a,b)=>{
        if(a.taskName>b.taskName)
          return -1;
        else if(a.taskName<b.taskName)
          return 1;
        else  
          return 0;
      });
    }
    else{
      this.toDoList.sort((a,b)=>{
        if(a.taskName>b.taskName)
          return 1;
        else if(a.taskName<b.taskName)
          return -1;
        else  
          return 0;
      });

    }
  }

  sortDownPriority = false;
  
  onClickPriorityFilter(){
    if(this.sortDownPriority==true)
      this.sortDownPriority = false;
    else  
      this.sortDownPriority = true;
    if(this.sortDownPriority==true){
      this.toDoList.sort((a,b)=>{
        if(a.taskPriority>b.taskPriority)
          return -1;
        else if(a.taskPriority<b.taskPriority)
          return 1;
        else  
          return 0;
      });
    }
    else{
      this.toDoList.sort((a,b)=>{
        if(a.taskPriority>b.taskPriority)
          return 1;
        else if(a.taskPriority<b.taskPriority)
          return -1;
        else  
          return 0;
      });

    }
  }

  
  sortDownDate = false;
  
  onClickDateFilter(){
    if(this.sortDownDate==true)
      this.sortDownDate = false;
    else  
      this.sortDownDate = true;
    if(this.sortDownDate==true){
      this.toDoList.sort((a,b)=>{
        if(a.taskDate>b.taskDate)
          return -1;
        else if(a.taskDate<b.taskDate)
          return 1;
        else  
          return 0;
      });
    }
    else{
      this.toDoList.sort((a,b)=>{
        if(a.taskDate>b.taskDate)
          return 1;
        else if(a.taskDate<b.taskDate)
          return -1;
        else  
          return 0;
      });

    }
  }

  onClickTask(ev:any){
    console.log(ev.target);
  }

  



}
