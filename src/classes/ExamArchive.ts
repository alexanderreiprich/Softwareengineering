import { Exam } from "./Exam";
import { Student } from "./Student";
import { ExamArchiveInterface } from "./ExamArchiveInterface";
import { ExamStatus } from "./ExamStatus";

export class ExamArchive {
  private allExams: ExamArchiveInterface = {};

  public registerExam(exam: Exam): void {
    let participants = exam.getParticipants();
    for (let i: number = 0; i < participants.length; i++) {
      this.allExams[participants[i].getStudentId()].push(exam);
    }
    exam.changeExamStatus(ExamStatus.ARCHIVED);
  }
  public getExamsFromStudent(student: Student): Exam[] {
    let examsFromStudent = this.allExams[student.getStudentId()];
    return examsFromStudent;
  }
  public getAllExams(): ExamArchiveInterface {
    return this.allExams;
  }
  public registerStudentToExamArchive(student: Student): void {
    this.allExams[student.getStudentId()] = [];
  }
}
