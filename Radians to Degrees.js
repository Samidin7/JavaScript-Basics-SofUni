function radionsToDegrees(input){

    //gradus = radians * 180 / P

    let radians = Number(input[0]);

    let degress = radians * 180 / Math.PI;

    console.log(degress);

}
radionsToDegrees(["3.1416"]);