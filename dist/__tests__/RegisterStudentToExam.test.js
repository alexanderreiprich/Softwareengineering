"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = require("../classes/Course");
const Examiner_1 = require("../classes/Examiner");
const Student_1 = require("../classes/Student");
const Exam_1 = require("../classes/Exam");
const ApplicationMethod_1 = require("../classes/enums/ApplicationMethod");
describe("This is a test for correctly registering students to an exam", () => {
    test("Check, if the students, examiners, course and exam are correctly created", () => {
        let student1 = new Student_1.Student();
        let student2 = new Student_1.Student();
        let prof1 = new Examiner_1.Examiner();
        let prof2 = new Examiner_1.Examiner();
        let course = new Course_1.Course(ApplicationMethod_1.ApplicationMethod.DIRECT, 20);
        let exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);
        expect(student1).toBe(Student_1.Student);
        expect(prof1).toBe(typeof Examiner_1.Examiner);
        expect(course).toBe(typeof Course_1.Course);
        expect(exam).toBe(typeof Exam_1.Exam);
        student1.toggleRegistrationForExam(exam);
        student2.toggleRegistrationForExam(exam);
        prof1.holdExam(exam);
        prof1.archiveExam(exam);
    });
});
//# sourceMappingURL=RegisterStudentToExam.test.js.map