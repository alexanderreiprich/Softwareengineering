"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMethod_1 = require("../classes/enums/ApplicationMethod");
const Course_1 = require("../classes/Course");
describe('testing Course file', () => {
    const course = new Course_1.Course(ApplicationMethod_1.ApplicationMethod.DIRECT, 20);
    test('checks getExams()', () => {
        expect(typeof course.getExams).toBe("function");
        expect(typeof course.getExams).toHaveReturned;
    });
});
//# sourceMappingURL=CheckCourse.test.js.map