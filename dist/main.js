"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore file */
const ExamArchive_1 = __importDefault(require("./classes/singletons/ExamArchive"));
const Student_1 = require("./classes/Student");
const Examiner_1 = require("./classes/Examiner");
const Course_1 = require("./classes/Course");
const ApplicationMethod_1 = require("./classes/enums/ApplicationMethod");
function main() {
    // Creating Students, Profs and Courses
    let student1 = new Student_1.Student();
    let student2 = new Student_1.Student();
    let prof1 = new Examiner_1.Examiner();
    let prof2 = new Examiner_1.Examiner();
    let course = new Course_1.Course(ApplicationMethod_1.ApplicationMethod.DIRECT, 20);
    // Hold an example exam
    let exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);
    student1.toggleRegistrationForExam(exam);
    student2.toggleRegistrationForExam(exam);
    prof1.holdExam(exam);
    prof1.archiveExam(exam);
    console.log(ExamArchive_1.default.getAllExams());
}
main();
//# sourceMappingURL=main.js.map