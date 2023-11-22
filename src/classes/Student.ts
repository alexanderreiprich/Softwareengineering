import { Exam } from "./Exam";
import { Course } from "./Course";
import { students, archive } from "../main";
export class Student {
  private studentId: string;

  constructor() {
    let id = Math.floor(Math.random() * 1000000).toString();
    while (students.getStudentFromId(id) != undefined) {
      id = Math.floor(Math.random() * 1000000).toString();
    }
    this.studentId = id;
    students.addStudent(this);
    archive.registerStudentToExamArchive(this);
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
}
