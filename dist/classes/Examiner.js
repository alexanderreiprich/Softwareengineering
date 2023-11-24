"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Examiner = void 0;
const Dozent_1 = require("./Dozent");
const Exam_1 = require("./Exam");
const ExamArchive_1 = __importDefault(require("./singletons/ExamArchive"));
class Examiner extends Dozent_1.Dozent {
    createExam(course, starttime, endtime, prof1, prof2) {
        return new Exam_1.Exam(course, starttime, endtime, prof1, prof2);
    }
    checkRegistrationsFromStudent(student) {
        return ExamArchive_1.default.getExamsFromStudent(student);
    }
    changeExaminer(exam, prof1, prof2) {
        exam.changeExaminers(prof1, prof2);
    }
    changeExamStatus(exam, examStatus) {
        exam.changeExamStatus(examStatus);
    }
    archiveExam(exam) {
        ExamArchive_1.default.registerExam(exam);
    }
}
exports.Examiner = Examiner;
//# sourceMappingURL=Examiner.js.map