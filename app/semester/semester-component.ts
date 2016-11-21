/* Created by Tal on 12/11/16. */

import {Component} from "@angular/core";

@Component({
    selector: 'semester-component',
    template: `
                <div class="semester-div">
                <h2>Semester {{number}}</h2>
                  <ul>
                    <li *ngFor="let subject of subjectsNames">
                      <span>
                      <input [value]="subject" id = "subjectGrade" type = "text"/>
                       <input id = "subjectGrade" type = "number"/>
                       <input id = "subjectWeight" type = "number"/>
                      </span>
                    </li>
                  </ul>
                <input #subjectName placeholder='Enter Subject' 
                        (keyup.enter)="addSubject(subjectName.value) ; subjectName.value='' " />

                  <br>
                  <button  (click)="addSubject(subjectName.value); subjectName.value=''">add</button>
                  <br>
                </div>
`,
})

export class semesterComponent {
    subjectsNames: string[] = [];

    addSubject(subjectName: string) {
    if ((subjectName.replace(/\s/g, '')).length > 0) {
        this.subjectsNames.push(subjectName);
        console.log(subjectName);
        console.log(this.subjectsNames);
        }

     };

    number = 1;
/*
    addSubject() {
        var newSubjectFields = document.createElement('<subject-component>');
        document.getElementById("wrapper").appendChild(newSubjectFields);
    }*/
}
