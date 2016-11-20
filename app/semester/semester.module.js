/**
 * Created by Tal on 12/11/16.
 */
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
var semester_component_1 = require("./semester-component");
var subject_component_1 = require("./subject-component");
var platform_browser_1 = require("@angular/platform-browser");
var semesterModule = (function () {
    function semesterModule() {
    }
    semesterModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [semester_component_1.semesterComponent, subject_component_1.subjectComponent],
            exports: [semester_component_1.semesterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], semesterModule);
    return semesterModule;
}());
exports.semesterModule = semesterModule;
//# sourceMappingURL=semester.module.js.map