import { Dozent } from "./Dozent";
import { Exam } from "./Exam";
import { Course } from "./Course";
import { Student } from "./Student";
import { ExamStatus } from "./enums/ExamStatus";
import ExamArchive from "./singletons/ExamArchive";
export class Examiner extends Dozent {
  public createExam( 
    course: Course, 
    starttime: Date,
    endtime: Date,
    prof1: Examiner,
    prof2: Examiner
  ): Exam {
    return new Exam(course, starttime, endtime, prof1, prof2);
  }
  public checkRegistrationsFromStudent(student: Student): Exam[] {
    return ExamArchive.getExamsFromStudent(student);
  }
  public changeExaminer(exam: Exam, prof1: Examiner, prof2: Examiner): void {
    exam.changeExaminers(prof1, prof2);
  }
  public changeExamStatus(exam: Exam, examStatus: ExamStatus): void {
    exam.changeExamStatus(examStatus);
  }
  public archiveExam(exam: Exam): void {
    ExamArchive.registerExam(exam);
  }
}
