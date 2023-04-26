function delivery(input){

    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegan = Number(input[2]);
    

    let ChickenPrice = chicken * 10.35;
    let FishPrice = fish * 12.40;
    let VeganPrice = vegan * 8.15;

    let fullPrice = ChickenPrice + FishPrice + VeganPrice;
    let desert = fullPrice * 0.2;
  
    let finalPrice = (fullPrice + desert) + 2.50;
    console.log(finalPrice);
}
delivery(["2","4","3"])