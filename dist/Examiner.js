"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Examiner = void 0;
const Dozent_1 = require("./Dozent");
const Exam_1 = require("./Exam");
const main_1 = require("./main");
class Examiner extends Dozent_1.Dozent {
    createExam(course, starttime, endtime, prof1, prof2) {
        return new Exam_1.Exam(course, starttime, endtime, prof1, prof2);
    }
    checkRegistrationsFromStudent(student) {
        return main_1.archive.getExamsFromStudent(student);
    }
    changeExaminer(exam, prof1, prof2) {
        exam.changeExaminers(prof1, prof2);
    }
    changeExamStatus(exam, examStatus) {
        exam.changeExamStatus(examStatus);
    }
    archiveExam(exam) {
        main_1.archive.registerExam(exam);
    }
}
exports.Examiner = Examiner;
//# sourceMappingURL=Examiner.js.map