function dayOfTheWeek(day: number, month: number, year: number): string {
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ][new Date(year, month - 1, day).getDay()];
}

console.log(dayOfTheWeek(6, 3, 1995));
