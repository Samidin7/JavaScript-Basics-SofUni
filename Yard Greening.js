function greening(input){

    let yard = Number(input[0]);
    let yardPrice = yard * 7.61;
    let priceDiscount = 0.18 * yardPrice;
    let finalPrice = yardPrice - priceDiscount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${priceDiscount} lv.`);
}
greening(["150"]);