import { Exam } from "./Exam";
import { Course } from "./Course";
import ExamArchive from "./singletons/ExamArchive";
import StudentArchive from "./singletons/StudentArchive";
import { CourseStatus } from "./enums/CourseStatus";
export class Student {
  private studentId: string;
  private courses: Course[];

  constructor() {
    let id = Math.floor(Math.random() * 1000000).toString();
    while (StudentArchive.getStudentFromId(id) != undefined) {
      id = Math.floor(Math.random() * 1000000).toString();
    }
    this.studentId = id;
    this.courses = [];
    StudentArchive.addStudent(this);
    ExamArchive.registerStudentToExamArchive(this);
  }

  private registerForCourse(course: Course): void {
    if (course.getStatus() == CourseStatus.PENDING) {
      if (this.courses.indexOf(course) == -1) {
        // Application Process
      }
      course.refreshParticipants();
    }
  }
  private unregisterFromCourse(course: Course): void {
    if (course.getStatus() != CourseStatus.PENDING) {
      this.courses.splice(this.courses.indexOf(course));
      course.refreshParticipants();
    }
  }

  public visitCourse(course: Course): void {
    return;
  }
  public toggleRegistrationForExam(exam: Exam): void {
    exam.changeRegistrationStatus(this);
  }

  public takeExam(exam: Exam): void {
    return;
  }
  public getStudentId(): string {
    return this.studentId;
  }
  public getCourses(): Course[] {
    return this.courses;
  }
}
