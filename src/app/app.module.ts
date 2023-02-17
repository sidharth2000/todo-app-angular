import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoViewerComponent } from './components/to-do-viewer/to-do-viewer.component';
import { ToDoMakerComponent } from './components/to-do-maker/to-do-maker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms'

import { MatInputModule } from '@angular/material/input'
import {MatRippleModule} from '@angular/material/core'

@NgModule({
  declarations: [
    AppComponent,
    ToDoViewerComponent,
    ToDoMakerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
