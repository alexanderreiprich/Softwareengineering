import { Availability } from "./enums/Availability";
import { AvailableTimes } from "./interfaces/AvailableTimes";
import { Course } from "./Course";
import { CourseStatus } from "./enums/CourseStatus";
import { Exam } from "./Exam";
import { ExamStatus } from "./enums/ExamStatus";
import { Student } from "./Student";
export class Dozent {

  private availableTimes: AvailableTimes = {};

  private setAvailability(date: Date, availability: Availability): void {
    this.availableTimes[date.toISOString()] = availability;
  }

  public teachCourse(course: Course): void {
    return;
  }
  public changeTeachers(course: Course, teachers: Dozent[]): void {
    if (course.getStatus() != CourseStatus.FINISHED) {
      course.setTeachers(teachers);
    }
  }
  public checkPrevCoursesOfStudents(course: Course, previousCourses: Course[]): boolean {
    let participants: Student[] = course.getParticipants();
    for (let i: number = 0; i < participants.length; i++) {
      for (let j: number = 0; j < previousCourses.length; j++) {
        if (participants[i].getCourses().indexOf(previousCourses[j]) == -1) {
          return false;
        }
      }
    }
    return true;
  }
  public holdExam(exam: Exam): void {
    exam.changeExamStatus(ExamStatus.INPROGRESS);
    return;
  }
  public isAvailable(date: Date): Availability {
    return this.availableTimes[date.toISOString()];
  }
}
