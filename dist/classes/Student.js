"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const ExamArchive_1 = __importDefault(require("./singletons/ExamArchive"));
const StudentArchive_1 = __importDefault(require("./singletons/StudentArchive"));
const CourseStatus_1 = require("./enums/CourseStatus");
class Student {
    constructor() {
        let id = Math.floor(Math.random() * 1000000).toString();
        while (StudentArchive_1.default.getStudentFromId(id) != undefined) {
            id = Math.floor(Math.random() * 1000000).toString();
        }
        this.studentId = id;
        this.courses = [];
        StudentArchive_1.default.addStudent(this);
        ExamArchive_1.default.registerStudentToExamArchive(this);
    }
    registerForCourse(course) {
        if (course.getStatus() == CourseStatus_1.CourseStatus.PENDING) {
            if (this.courses.indexOf(course) == -1) {
                // Application Process
            }
            course.refreshParticipants();
        }
    }
    unregisterFromCourse(course) {
        if (course.getStatus() != CourseStatus_1.CourseStatus.PENDING) {
            this.courses.splice(this.courses.indexOf(course));
            course.refreshParticipants();
        }
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
    getCourses() {
        return this.courses;
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map