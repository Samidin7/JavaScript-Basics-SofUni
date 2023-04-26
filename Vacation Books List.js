function vacationBookList(input){

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let DaysCount = Number(input[2]);

    let totalHoursNeeded = pages / pagesPerHour;
    let hoursPerDay = totalHoursNeeded / DaysCount;

    console.log(hoursPerDay);

}
vacationBookList(["212 ","20 ","2 "])