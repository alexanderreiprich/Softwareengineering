import { Examiner } from "./Examiner";
import { Exam } from "./Exam";

export class Course {
  private examiners: Examiner[] = [];
  private exams: Exam[] = [];

  public getExaminers(): Examiner[] {
    return this.examiners;
  }
  public getExams(): Exam[] {
    return this.exams;
  }
}
