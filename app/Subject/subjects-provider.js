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
/**
 * Created by Tal on 20/11/16.
 */
var core_1 = require("@angular/core");
var subject_1 = require("./subject");
var mock_subjects_1 = require("./mock-subjects");
var subjectsProvider = (function () {
    function subjectsProvider() {
    }
    subjectsProvider.prototype.getAllSubjects = function () {
        return mock_subjects_1.mockSubjects;
    };
    subjectsProvider.prototype.getSemesterSubjects = function (semesterNum) {
        var relevantSubjects = [];
        var allSubjects = this.getAllSubjects();
        var allSubjectsLength = allSubjects.length;
        var i = 0;
        while (i < allSubjectsLength) {
            if (subject_1.subject[i].semester = semesterNum) {
                relevantSubjects.push(subject_1.subject[i]);
            }
            i++;
        }
        return relevantSubjects;
    };
    subjectsProvider.prototype.getGeneralAverage = function () {
        return 0;
    };
    subjectsProvider.prototype.getSemesterAverage = function () {
        return 0;
    };
    subjectsProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], subjectsProvider);
    return subjectsProvider;
}());
exports.subjectsProvider = subjectsProvider;
//# sourceMappingURL=subjects-provider.js.map