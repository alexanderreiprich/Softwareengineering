import { Availability } from "../enums/Availability";

export interface AvailableTimes {
    [date: string]: Availability;
}