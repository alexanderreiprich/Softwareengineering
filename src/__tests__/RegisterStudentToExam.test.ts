import { Course } from "../classes/Course";
import { Examiner } from "../classes/Examiner";
import { Student } from "../classes/Student";
import { Exam } from "../classes/Exam";
import { ApplicationMethod } from "../classes/enums/ApplicationMethod";
import ExamArchive from "../classes/singletons/ExamArchive";

describe("This is a test for correctly registering students to an exam", () => {
  test("Check, if the students, examiners, course and exam are correctly created", () => {

    let student1: Student = new Student();
    let student2: Student = new Student();
    let prof1: Examiner = new Examiner();
    let prof2: Examiner = new Examiner();
    let course: Course = new Course(ApplicationMethod.DIRECT, 20);
    let exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2)

    expect(student1).toBe(Student);
    expect(prof1).toBe(typeof Examiner);
    expect(course).toBe(typeof Course);
    expect(exam).toBe(typeof Exam);

    student1.toggleRegistrationForExam(exam);
    student2.toggleRegistrationForExam(exam);
    prof1.holdExam(exam);
    prof1.archiveExam(exam);
    
  });
});
