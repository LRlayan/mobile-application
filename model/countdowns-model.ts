export class CountdownsModel {
    id: number;
    title: string;
    date: Date;
    time: { hours: number; minutes: number }
    repeat: string;
    color: string;
    note: string;
    selectedUnits: string[];

    constructor(id: number, title: string, date: Date, time: {
        hours: number;
        minutes: number
    }, repeat: string, color: string, note: string, selectedUnits: string[]) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.time = time;
        this.repeat = repeat;
        this.color = color;
        this.note = note;
        this.selectedUnits = selectedUnits;
    }
}