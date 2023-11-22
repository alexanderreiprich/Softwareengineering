"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dozent = void 0;
const ExamStatus_1 = require("./ExamStatus");
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