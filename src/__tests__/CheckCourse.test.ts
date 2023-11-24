import { ApplicationMethod } from '../classes/enums/ApplicationMethod';
import { Course } from '../classes/Course';

describe('testing Course file', () => {
  const course = new Course(ApplicationMethod.DIRECT, 20);
  test('checks getExams()', () => {
    expect(typeof course.getExams).toBe("function");
    expect(typeof course.getExams).toHaveReturned;
  });
});