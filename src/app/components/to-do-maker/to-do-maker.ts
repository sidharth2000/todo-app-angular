import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ToDoDetailType } from "src/app/types/to-do-detail.type";
@Component({
    selector:'app-to-do-maker',
    templateUrl:'./to-do-maker.html',
    styleUrls:['./to-do-maker.scss']
})

export class ToDoMakerComponent implements OnInit{

    constructor(private fb: FormBuilder){

    }
    ngOnInit(): void {
        
    }

    @Output() toDoAdded = new EventEmitter();
    toDoForm = this.fb.nonNullable.group({
        taskName :  ['',[Validators.required]],
        taskDate : ['',[Validators.required]],
        taskPriority : ['',[Validators.required]]
    })
    toDoDetail:ToDoDetailType | undefined;
    onSubmit(){
        console.log(this.toDoForm.value);
        if(this.toDoForm.valid == false){
            console.log("enter all");
            alert("PLEASE ENTER ALL FIELDS")
            return;
        }
        this.toDoDetail =  this.toDoForm.getRawValue();
        this.toDoAdded.emit(this.toDoDetail);
        this.toDoForm.reset();
    }

}