"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const StudentArchive_1 = __importDefault(require("./singletons/StudentArchive"));
const CourseStatus_1 = require("./enums/CourseStatus");
class Course {
    constructor(applicationMethod, maxParticipants) {
        this.teachers = [];
        this.exams = [];
        this.participants = [];
        this.applicants = [];
        this.status = CourseStatus_1.CourseStatus.STARTED;
        this.applicationMethod = applicationMethod;
        this.maxParticipants = maxParticipants;
    }
    getTeachers() {
        return this.teachers;
    }
    getExams() {
        return this.exams;
    }
    getParticipants() {
        return this.participants;
    }
    getStatus() {
        return this.status;
    }
    refreshParticipants() {
        let newParticipants = [];
        let allStudents = StudentArchive_1.default.getAllStudents();
        for (let i = 0; i < allStudents.length; i++) {
            if (allStudents[i].getCourses().indexOf(this) > -1) {
                newParticipants.push(allStudents[i]);
            }
        }
        this.participants = newParticipants;
    }
    setTeachers(teachers) {
        this.teachers = teachers;
    }
    setApplicationMethod(applicationMethod) {
        this.applicationMethod = applicationMethod;
    }
    chooseApplicantsDirectly(chosenApplicants) {
        this.participants = chosenApplicants;
        return this.participants;
    }
    randomlyChooseApplicants() {
        let applicantsCopy = this.applicants;
        for (let i = 0; i < this.maxParticipants; i++) {
            let rand = Math.floor(Math.random() * applicantsCopy.length - 1);
            this.participants.push(applicantsCopy[rand]);
            applicantsCopy.splice(rand);
        }
        return this.participants;
    }
}
exports.Course = Course;
//# sourceMappingURL=Course.js.map