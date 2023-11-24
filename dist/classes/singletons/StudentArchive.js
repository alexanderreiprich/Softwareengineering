"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentArchive {
    constructor() {
        if (StudentArchive.instance) {
            throw new Error("STOP");
        }
        StudentArchive.instance = this;
        this.students = [];
    }
    static getInstance() {
        return StudentArchive.instance;
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
StudentArchive.instance = new StudentArchive();
exports.default = StudentArchive.getInstance();
//# sourceMappingURL=StudentArchive.js.map