import { Course } from '../classes/Course';

describe('testing Course file', () => {
  const course = new Course();
  test('checks getExams()', () => {
    expect(typeof course.getExams).toBe("function");
    expect(typeof course.getExams).toHaveReturned;
  });
});