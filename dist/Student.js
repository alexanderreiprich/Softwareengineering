"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
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