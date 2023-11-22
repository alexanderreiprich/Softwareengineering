import { Course } from "../classes/Course";
import { Examiner } from "../classes/Examiner";
import { Student } from "../classes/Student";
import { Exam } from "../classes/Exam";

describe("This is a test for correctly registering students to an exam", () => {
  test("Check, if the students, examiners, course and exam are correctly created", () => {

    
    let student1: Student = new Student();
    let prof1: Examiner = new Examiner();
    let prof2: Examiner = new Examiner();
    let course: Course = new Course();
    let exam: Exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);

    student1.toggleRegistrationForExam(exam);

    expect(exam.getParticipants()).toBe(!undefined);
  });
});
