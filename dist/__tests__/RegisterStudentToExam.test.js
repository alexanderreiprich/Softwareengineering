"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = require("../classes/Course");
const Examiner_1 = require("../classes/Examiner");
const Student_1 = require("../classes/Student");
describe("This is a test for correctly registering students to an exam", () => {
    test("Check, if the students, examiners, course and exam are correctly created", () => {
        let student1 = new Student_1.Student();
        let prof1 = new Examiner_1.Examiner();
        let prof2 = new Examiner_1.Examiner();
        let course = new Course_1.Course();
        let exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);
        student1.toggleRegistrationForExam(exam);
        expect(exam.getParticipants()).toBe(!undefined);
    });
});
//# sourceMappingURL=RegisterStudentToExam.test.js.map