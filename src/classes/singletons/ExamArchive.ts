import { Exam } from "../Exam";
import { Student } from "../Student";
import { ExamArchiveInterface } from "../interfaces/ExamArchiveInterface";
import { ExamStatus } from "../enums/ExamStatus";

export class ExamArchive {
  private allExams: ExamArchiveInterface;
  private static instance: ExamArchive = new ExamArchive();

  constructor() {
    if (ExamArchive.instance) {
      throw new Error("STOP");
    }
    ExamArchive.instance = this;
    this.allExams = {};
  }

  public static getInstance(): ExamArchive {
    return ExamArchive.instance;
  }

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

export default ExamArchive.getInstance();