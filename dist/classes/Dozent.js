"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dozent = void 0;
const CourseStatus_1 = require("./enums/CourseStatus");
const ExamStatus_1 = require("./enums/ExamStatus");
class Dozent {
    constructor() {
        this.availableTimes = {};
    }
    setAvailability(date, availability) {
        this.availableTimes[date.toISOString()] = availability;
    }
    teachCourse(course) {
        return;
    }
    changeTeachers(course, teachers) {
        if (course.getStatus() != CourseStatus_1.CourseStatus.FINISHED) {
            course.setTeachers(teachers);
        }
    }
    checkPrevCoursesOfStudents(course, previousCourses) {
        let participants = course.getParticipants();
        for (let i = 0; i < participants.length; i++) {
            for (let j = 0; j < previousCourses.length; j++) {
                if (participants[i].getCourses().indexOf(previousCourses[j]) == -1) {
                    return false;
                }
            }
        }
        return true;
    }
    holdExam(exam) {
        exam.changeExamStatus(ExamStatus_1.ExamStatus.INPROGRESS);
        return;
    }
    isAvailable(date) {
        return this.availableTimes[date.toISOString()];
    }
}
exports.Dozent = Dozent;
//# sourceMappingURL=Dozent.js.map