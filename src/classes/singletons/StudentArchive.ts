import { Student } from "../Student";

class StudentArchive {
    private static instance: StudentArchive = new StudentArchive();
    private students: Student[];

    constructor() {
        if (StudentArchive.instance) {
            throw new Error("STOP");
        }
        StudentArchive.instance = this;
        this.students = [];
    }

    public static getInstance(): StudentArchive {
        return StudentArchive.instance;
    }
    public addStudent(student: Student): void {
        this.students.push(student);
      }
      public removeStudent(student: Student): void {
        this.students.splice(this.students.indexOf(student));
      }
      public getStudentFromId(id: string): Student | undefined {
        for (let i: number = 0; i < this.students.length; i++) {
          if (this.students[i].getStudentId() == id) {
            return this.students[i];
          }
        }
        return undefined;
      }
      public getAllStudents(): Student[] {
        return this.students;
      }
}

export default StudentArchive.getInstance();