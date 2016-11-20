/**
 * Created by Tal on 12/11/16.
 */


import {NgModule} from "@angular/core";
import {semesterComponent} from "./semester-component";
import {subjectComponent} from "./subject-component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule],
    declarations: [semesterComponent, subjectComponent],
    exports: [semesterComponent]

})

export class semesterModule{

}