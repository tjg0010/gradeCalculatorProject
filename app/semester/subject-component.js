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
var subjectComponent = (function () {
    function subjectComponent() {
    }
    subjectComponent = __decorate([
        core_1.Component({
            selector: 'subject-component',
            template: "\n                    <span>\n                        <input id=\"subjectName\" name = \"subject name\" placeholder =\"Enter Subject Name\" type=\"text\"/>\n                        <input name=\"subject grade\" placeholder=\"Enter Grade\" type = \"number\" min=\"0\" max=\"100\" required />\n                        <input name=\"weight\" placeholder=\"Enter Weight\" type = \"number\" min=\"0\" max=\"20\" required  />\n                    </span>\n                <br>\n                <button (click)=\"addSubject()\">add</button>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], subjectComponent);
    return subjectComponent;
}());
exports.subjectComponent = subjectComponent;
//# sourceMappingURL=subject-component.js.map