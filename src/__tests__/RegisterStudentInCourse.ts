import { Course } from "../classes/Course";
import { Student } from "../classes/Student";
import { ApplicationMethod } from "../classes/enums/ApplicationMethod";

describe("This is a test for correctly registering students to a course", () => {
  test("Check, if the student is correctly enrolled", () => {

    let student1: Student = new Student();
    let course: Course = new Course(ApplicationMethod.DIRECT, 20);

    student1.registerForCourse(course);
    course.refreshParticipants();
    expect(course.getParticipants()).toHaveLength(1);
    
  });
});
