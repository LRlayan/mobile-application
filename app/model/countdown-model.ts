export class CountdownModel{
    title: string;
    date: string;
    time: string;
    repeat: string;
    color: string;
    notes: string;

    constructor(title: string, date: string, time: string, repeat: string, color: string, notes: string) {
        this.title = title;
        this.date = date;
        this.time = time;
        this.repeat = repeat;
        this.color = color;
        this.notes = notes;
    }
}