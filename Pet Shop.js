function shop(input){ 

let dogsFood = Number(input[0]) * 2.50;
let catsFood = Number(input[1]) * 4;

let FinalSum = dogsFood + catsFood;
    console.log(` ${FinalSum} lv.`);
}
shop(["5","4"]);
