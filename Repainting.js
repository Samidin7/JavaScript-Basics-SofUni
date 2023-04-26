function repainting(input){
 
let nylonAmount = Number(input[0]);
let paintAmount = Number(input[1]);
let thinnerAmount = Number(input[2]);
let work = Number(input[3]);

let additionalPaint = paintAmount * 0.10;
let totalPaintAmount = paintAmount + additionalPaint;

let totalNylonAmount = nylonAmount + 2;


let bags = 0.40;

let nylonPrice = totalNylonAmount * 1.50;
let paintPrice = totalPaintAmount * 14.50;
let thinnerPrice = thinnerAmount * 5.00;

let totalMaterial = nylonPrice + paintPrice + thinnerPrice  + bags;


let workPerHour = 0.30 * totalMaterial;

let totalWork = work * workPerHour;

let totalTotal = totalWork + totalMaterial;

console.log(totalTotal);

}
repainting(["10 ","11 ","4 ","8 "])