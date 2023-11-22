import { Availability } from "./Availability";
import { AvailableTimes } from "./AvailableTimes";
import { Course } from "./Course";
import { Exam } from "./Exam";
import { ExamStatus } from "./ExamStatus";
export class Dozent {
  private availableTimes: AvailableTimes = {};

  private setAvailability(date: Date, availability: Availability): void {
    this.availableTimes[date.toISOString()] = availability;
  }

  public teachCourse(course: Course): void {
    return;
  }
  public holdExam(exam: Exam): void {
    exam.changeExamStatus(ExamStatus.INPROGRESS);
    return;
  }
  public isAvailable(date: Date): Availability {
    return this.availableTimes[date.toISOString()];
  }
}
