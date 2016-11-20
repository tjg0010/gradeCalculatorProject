/**
 * Created by Tal on 12/11/16.
 */

import {Component} from "@angular/core";
@Component({

    selector: 'subject-component',
    template: `
                    <span>
                        <input id="subjectName" name = "subject name" placeholder ="Enter Subject Name" type="text"/>
                        <input name="subject grade" placeholder="Enter Grade" type = "number" min="0" max="100" required />
                        <input name="weight" placeholder="Enter Weight" type = "number" min="0" max="20" required  />
                    </span>
                <br>
                <button (click)="addSubject()">add</button>
`

})

export class subjectComponent{

/*    subjectsNames = [];
    addSubject(subjectName: string){
        if(subjectName){
            this.subjectsNames.push(subjectName);
        }

    };*/

    /*    addSubject(){
        var newSubjectFields = document.createElement('span');
        newSubjectFields.innerHTML = '<br><input name = "subject name" placeholder ="Enter Subject Name" type="text"/> <input name="subject grade" placeholder="Enter Grade" type = "number" min="0" max="100" required /> <input name="weight" placeholder="Enter Weight" type = "number" min="0" max="20" required  />';
        document.getElementById('wrapper').appendChild(newSubjectFields);
        }*/


}