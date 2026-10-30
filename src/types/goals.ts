export interface Goal {
    id : string;
    title : string;
    dailyHours : number;
    durationWeeks : number;
    status : "active" | "completed" | "paused";
}