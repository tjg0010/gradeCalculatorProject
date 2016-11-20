/* Created by Tal on 12/11/16. */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var semesterComponent = (function () {
    function semesterComponent() {
        this.subjectsNames = [];
        this.number = 1;
    }
    semesterComponent.prototype.addSubject = function (subjectName) {
        if ((subjectName.replace(/\s/g, '')).length > 0) {
            this.subjectsNames.push(subjectName);
            console.log(subjectName);
            console.log(this.subjectsNames);
        }
    };
    ;
    semesterComponent = __decorate([
        core_1.Component({
            selector: 'semester-component',
            template: "\n                <div class=\"semester-div\">\n                <h2>Semester {{number}}</h2>\n                  <ul>\n                    <li *ngFor=\"let subject of subjectsNames\">\n                      <span>\n                      <input [value]=\"subject\" id = \"subjectGrade\" type = \"text\"/>\n                       <input id = \"subjectGrade\" type = \"number\"/>\n                       <input id = \"subjectWeight\" type = \"number\"/>\n                      </span>\n                    </li>\n                  </ul>\n                <input #subjectName placeholder='Enter Subject' \n                        (keyup.enter)=\"addSubject(subjectName.value) ; subjectName.value='' \" />\n\n                  <br>\n                  <button  (click)=\"addSubject(subjectName.value); subjectName.value=''\">add</button>\n                  <br>\n                </div>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], semesterComponent);
    return semesterComponent;
}());
exports.semesterComponent = semesterComponent;
//# sourceMappingURL=semester-component.js.map