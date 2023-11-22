import { Exam } from "./Exam"

export interface ExamArchiveInterface {
    [student: string]: Exam[];
}