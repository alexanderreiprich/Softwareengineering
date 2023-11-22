"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentArchive = void 0;
class StudentArchive {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    removeStudent(student) {
        this.students.splice(this.students.indexOf(student));
    }
    getStudentFromId(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].getStudentId() == id) {
                return this.students[i];
            }
        }
        return undefined;
    }
    getAllStudents() {
        return this.students;
    }
}
exports.StudentArchive = StudentArchive;
//# sourceMappingURL=StudentArchive.js.map