import { ExamArchive } from "./classes/ExamArchive";
import { StudentArchive } from "./classes/StudentArchive";
import { Exam } from "./classes/Exam";
import { Dozent } from "./classes/Dozent";
import { Student } from "./classes/Student";
import { Examiner } from "./classes/Examiner";
import { Course } from "./classes/Course";
import { ExamStatus } from "./classes/ExamStatus";

export let archive: ExamArchive = new ExamArchive();
export let students: StudentArchive = new StudentArchive();

// Creating Students, Profs and Courses
let student1: Student = new Student();
let student2: Student = new Student();
let prof1: Examiner = new Examiner();
let prof2: Examiner = new Examiner();
let course: Course = new Course();

// Hold an example exam
let exam: Exam = prof1.createExam(course, new Date(), new Date(), prof1, prof2);
student1.toggleRegistrationForExam(exam);
student2.toggleRegistrationForExam(exam);
prof1.holdExam(exam);
prof1.archiveExam(exam)
console.log(archive.getAllExams());