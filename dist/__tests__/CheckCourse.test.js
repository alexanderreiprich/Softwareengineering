"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = require("../classes/Course");
describe('testing Course file', () => {
    const course = new Course_1.Course();
    test('checks getExams()', () => {
        expect(typeof course.getExams).toBe("function");
        expect(typeof course.getExams).toHaveReturned;
    });
});
//# sourceMappingURL=CheckCourse.test.js.map