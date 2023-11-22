"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamArchive = void 0;
const ExamStatus_1 = require("./ExamStatus");
class ExamArchive {
    constructor() {
        this.allExams = {};
    }
    registerExam(exam) {
        let participants = exam.getParticipants();
        for (let i = 0; i < participants.length; i++) {
            this.allExams[participants[i].getStudentId()].push(exam);
        }
        exam.changeExamStatus(ExamStatus_1.ExamStatus.ARCHIVED);
    }
    getExamsFromStudent(student) {
        let examsFromStudent = this.allExams[student.getStudentId()];
        return examsFromStudent;
    }
    getAllExams() {
        return this.allExams;
    }
    registerStudentToExamArchive(student) {
        this.allExams[student.getStudentId()] = [];
    }
}
exports.ExamArchive = ExamArchive;
//# sourceMappingURL=ExamArchive.js.map