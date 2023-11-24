"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamArchive = void 0;
const ExamStatus_1 = require("../enums/ExamStatus");
class ExamArchive {
    constructor() {
        if (ExamArchive.instance) {
            throw new Error("STOP");
        }
        ExamArchive.instance = this;
        this.allExams = {};
    }
    static getInstance() {
        return ExamArchive.instance;
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
ExamArchive.instance = new ExamArchive();
exports.default = ExamArchive.getInstance();
//# sourceMappingURL=ExamArchive.js.map