import {semesterComponent} from "../semester/semester-component";
/**
 * Created by Tal on 20/11/16.
 */
export class subject{
    public title: string;
    public grade: number;
    public weight: number;
    public semester: number;

    constructor (title, grade, weight, semester){
        this.title = title;
        this.grade = grade;
        this.weight = weight;
        this.semester = semester;
    }
}