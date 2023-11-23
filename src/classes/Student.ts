import { Exam } from "./Exam";
import { Course } from "./Course";
import { students, archive } from "../main";
import { CourseStatus } from "./CourseStatus";
export class Student {
  private studentId: string;
  private courses: Course[];

  constructor() {
    let id = Math.floor(Math.random() * 1000000).toString();
    while (students.getStudentFromId(id) != undefined) {
      id = Math.floor(Math.random() * 1000000).toString();
    }
    this.studentId = id;
    this.courses = [];
    students.addStudent(this);
    archive.registerStudentToExamArchive(this);
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
