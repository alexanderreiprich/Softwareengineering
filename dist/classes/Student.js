"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const main_1 = require("../main");
class Student {
    constructor() {
        let id = Math.floor(Math.random() * 1000000).toString();
        while (main_1.students.getStudentFromId(id) != undefined) {
            id = Math.floor(Math.random() * 1000000).toString();
        }
        this.studentId = id;
        main_1.students.addStudent(this);
        main_1.archive.registerStudentToExamArchive(this);
    }
    visitCourse(course) {
        return;
    }
    toggleRegistrationForExam(exam) {
        exam.changeRegistrationStatus(this);
    }
    takeExam(exam) {
        return;
    }
    getStudentId() {
        return this.studentId;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map