function equipment(input){

    let annualTrainingPrice = Number(input[0])
    let shoes = annualTrainingPrice * 0.6; //annualTrainingPrice - annualTrainingPrice * 0.4;
    let outfit = shoes * 0.8; //shoes - shoues * 0. 2;
    let ball = 1/4 * outfit; //outfit / 4;
    let acssesories = 1/5 * ball; //ball / 5; 

    finalSum = annualTrainingPrice + shoes + outfit + ball + acssesories;
 
    console.log(finalSum);
}
equipment(["365"]);