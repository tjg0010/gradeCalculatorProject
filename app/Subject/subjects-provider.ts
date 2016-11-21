/**
 * Created by Tal on 20/11/16.
 */
import {Injectable} from "@angular/core";
import {subject} from "./subject";
import {mockSubjects} from "./mock-subjects";
@Injectable()
export class subjectsProvider{

    getAllSubjects(): subject[]{
        return mockSubjects;
    }

    getSemesterSubjects(semesterNum): subject[]{
        let relevantSubjects: subject[] = [];
        let allSubjects = this.getAllSubjects();
        let allSubjectsLength = allSubjects.length;
        let i = 0;
        while (i < allSubjectsLength){
            if(subject[i].semester = semesterNum){
                relevantSubjects.push(subject[i])
            }
            i++;
        }
        return relevantSubjects;
    }

    getGeneralAverage(): number {
        return 0;
    }

    getSemesterAverage(): number {
        return 0;
    }
}


