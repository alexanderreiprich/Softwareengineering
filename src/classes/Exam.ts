import { Course } from "./Course";
import { Examiner } from "./Examiner";
import { Student } from "./Student";
import { Availability } from "./Availability";
import { ExamStatus } from "./ExamStatus";

export class Exam {
  private course: Course;
  private starttimeofExam: Date;
  private endtimeofExam: Date;
  private prof1: Examiner;
  private prof2: Examiner;
  private participants: Student[];
  private status: ExamStatus;

  constructor(
    course: Course,
    starttimeOfExam: Date,
    endtimeOfExam: Date,
    prof1: Examiner,
    prof2: Examiner
  ) {
    this.course = course;
    this.starttimeofExam = starttimeOfExam;
    this.endtimeofExam = endtimeOfExam;
    this.prof1 = prof1;
    this.prof2 = prof2;
    this.participants = [];
    this.status = ExamStatus.PENDING;
  }

  public getAvailability(): Availability[] {
    return [
      this.prof1.isAvailable(this.starttimeofExam),
      this.prof2.isAvailable(this.starttimeofExam),
    ];
  }
  public getStarttime(): Date {
    return this.starttimeofExam;
  }
  public getEndtime(): Date {
    return this.endtimeofExam;
  }
  public getParticipants(): Student[] {
    return this.participants;
  }
  public getStatus(): ExamStatus {
    return this.status;
  }
  public getCourse(): Course {
    return this.course;
  }
  public changeRegistrationStatus(student: Student): void {
    if (this.participants.indexOf(student) > -1) {
      this.participants.splice(this.participants.indexOf(student));
    } else {
      this.participants.push(student);
    }
  }
  public changeExaminers(prof1: Examiner, prof2: Examiner): void {
    this.prof1 = prof1;
    this.prof2 = prof2;
  }
  public changeExamStatus(status: ExamStatus): void {
    this.status = status;
  }
}
