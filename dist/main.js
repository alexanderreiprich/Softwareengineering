"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.students = exports.archive = void 0;
const ExamArchive_1 = require("./classes/ExamArchive");
const StudentArchive_1 = require("./classes/StudentArchive");
const Student_1 = require("./classes/Student");
const Examiner_1 = require("./classes/Examiner");
const Course_1 = require("./classes/Course");
exports.archive = new ExamArchive_1.ExamArchive();
exports.students = new StudentArchive_1.StudentArchive();
// Creating Students, Profs and Courses
let student1 = new Student_1.Student();
let student2 = new Student_1.Student();
let prof1 = new Examiner_1.Examiner();
let prof2 = new Examiner_1.Examiner();
let course = new Course_1.Course();
// Hold an example exam
let exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);
student1.toggleRegistrationForExam(exam);
student2.toggleRegistrationForExam(exam);
prof1.holdExam(exam);
prof1.archiveExam(exam);
console.log(exports.archive.getAllExams());
//# sourceMappingURL=main.js.map