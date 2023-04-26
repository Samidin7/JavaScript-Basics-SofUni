function school(input){

let pens = Number(input[0]) * 5.80;
let markers = Number(input[1]) * 7.20;
let preparation = Number(input[2]) * 1.20;
let procent = Number(input[3]);
;
let sum = pens + markers + preparation;
let discount = procent * sum / 100;

let finalSum = sum - discount; 
console.log(finalSum);
}
school(["2","3","4","25"])
