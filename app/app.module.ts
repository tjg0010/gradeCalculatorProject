import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {semesterModule} from './semester/semester.module';

@NgModule({
  imports:      [ BrowserModule, semesterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
