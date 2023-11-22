import { Availability } from "./Availability";

export interface AvailableTimes {
    [date: string]: Availability;
}