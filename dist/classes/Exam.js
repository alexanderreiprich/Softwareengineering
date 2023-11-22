"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
const ExamStatus_1 = require("./ExamStatus");
class Exam {
    constructor(course, starttimeOfExam, endtimeOfExam, prof1, prof2) {
        this.course = course;
        this.starttimeofExam = starttimeOfExam;
        this.endtimeofExam = endtimeOfExam;
        this.prof1 = prof1;
        this.prof2 = prof2;
        this.participants = [];
        this.status = ExamStatus_1.ExamStatus.PENDING;
    }
    getAvailability() {
        return [
            this.prof1.isAvailable(this.starttimeofExam),
            this.prof2.isAvailable(this.starttimeofExam),
        ];
    }
    getStarttime() {
        return this.starttimeofExam;
    }
    getEndtime() {
        return this.endtimeofExam;
    }
    getParticipants() {
        return this.participants;
    }
    getStatus() {
        return this.status;
    }
    getCourse() {
        return this.course;
    }
    changeRegistrationStatus(student) {
        if (this.participants.indexOf(student) > -1) {
            this.participants.splice(this.participants.indexOf(student));
        }
        else {
            this.participants.push(student);
        }
    }
    changeExaminers(prof1, prof2) {
        this.prof1 = prof1;
        this.prof2 = prof2;
    }
    changeExamStatus(status) {
        this.status = status;
    }
}
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map