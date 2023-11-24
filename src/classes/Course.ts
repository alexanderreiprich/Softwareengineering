import { Exam } from "./Exam";
import { Student } from "./Student";
import StudentArchive from "./singletons/StudentArchive";
import { CourseStatus } from "./enums/CourseStatus";
import { Dozent } from "./Dozent";
import { ApplicationMethod } from "./enums/ApplicationMethod";
import { WaitinglistMethod } from "./enums/WaitinglistMethod";

export class Course {
  private teachers: Dozent[] = [];
  private exams: Exam[] = [];
  private maxParticipants: number;
  private participants: Student[] = [];
  private applicants: Student[] = [];
  private status: CourseStatus = CourseStatus.STARTED;
  private applicationMethod: ApplicationMethod;

  constructor(applicationMethod: ApplicationMethod, maxParticipants: number) {
    this.applicationMethod = applicationMethod;
    this.maxParticipants = maxParticipants;
  }

  public getTeachers(): Dozent[] {
    return this.teachers;
  }
  public getExams(): Exam[] {
    return this.exams;
  }
  public getParticipants(): Student[] {
    return this.participants;
  }
  public getStatus(): CourseStatus {
    return this.status;
  }
  public refreshParticipants(): void {
    let newParticipants: Student[] = [];
    let allStudents: Student[] = StudentArchive.getAllStudents();
    for (let i: number = 0; i < allStudents.length; i++) {
      if (allStudents[i].getCourses().indexOf(this) > -1) {
        newParticipants.push(allStudents[i]);
      }
    }
    this.participants = newParticipants;
  }
  public setTeachers(teachers: Dozent[]): void {
    this.teachers = teachers;
  }
  public setApplicationMethod(applicationMethod: ApplicationMethod): void {
    this.applicationMethod = applicationMethod;
  }
  public chooseApplicantsDirectly(chosenApplicants: Student[]): Student[] {
    this.participants = chosenApplicants;
    return this.participants;
  }
  public randomlyChooseApplicants(): Student[] {
    let applicantsCopy: Student[] = this.applicants;
    for (let i = 0; i < this.maxParticipants; i++) {
      let rand: number = Math.floor(Math.random() * applicantsCopy.length - 1)
      this.participants.push(applicantsCopy[rand]);
      applicantsCopy.splice(rand);
    }
    return this.participants;
  }
}
