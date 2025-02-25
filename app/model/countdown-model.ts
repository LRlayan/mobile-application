export class CountdownModel{
    title: string;
    date: Date;
    time: { hours: number; minutes: number } | undefined;
    repeat: string;
    color: string;
    notes: string;
    selectedUnits: string[]

    constructor(title: string, date: Date, time: {
        hours: number;
        minutes: number
    } | undefined, repeat: string, color: string, notes: string, selectedUnits: string[]) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.repeat = repeat;
        this.color = color;
        this.notes = notes;
        this.selectedUnits = selectedUnits;
    }
}