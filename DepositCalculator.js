function depositCalculator(input){

    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let depositLihvaPercent = Number(input[2]);

    let depositLihvaPercentDecimal = depositLihvaPercent / 100;

    let finalSum = depositSum + depositTime * ((depositSum * depositLihvaPercentDecimal) / 12);

console.log(finalSum);
}
depositCalculator(["200 ","3 ","5.7 "])