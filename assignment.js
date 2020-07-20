// For feet to mile converter
function feetToMile(feet){
    // 1 feet = 0.00018939393 mile
    const miles = 0.00018939393;
    let totalMiles = (miles * feet);
    return totalMiles;
}
var result = feetToMile(12);
console.log(result);


// Wood calculator
function woodCalculator(chairReq, tableReq, bedReq){
    // default 1 chair requires 1 cubic feet wood
    const chair = 1;
    // 1 table requires 3 cubic feet wood
    const table = 3;
    // 1 bed requires 5 cubic feet  wood
    const bed = 5;

    let totalChairCount = chair * chairReq;
    let totalTableCount = table * tableReq;
    let totalBedCount = bed * bedReq;

    let totalWoodRequired = totalChairCount + totalTableCount + totalBedCount;
    return totalWoodRequired;
}
var woodResult = woodCalculator(1,3,5);
console.log(woodResult);


//brickCalculator
function brickCalculator(buildingStorey){
    const brickPerFeet = 1000;
    let floorHeight = 0;
    let totalBrickPerFloor = 0;
    let totalForFirstTen = 0;
    let totalForSecondTen = 0;
    let total = 0;

    if(buildingStorey <= 0)
    {
        return 'Building must be non negative or greater then 0';
    }
    else if(buildingStorey <= 10)
    {
        floorHeight = 15;
        totalBrickPerFloor = floorHeight * brickPerFeet;
        totalForFirstTen = totalBrickPerFloor * buildingStorey;
        total = totalForFirstTen;
        return total;
    }

    else if(buildingStorey <= 20)
    {
        totalForFirstTen = 15 * 1000 * 10;
        floorHeight = 12;
        totalBrickPerFloor = floorHeight * brickPerFeet;
        totalForSecondTen = totalBrickPerFloor * (buildingStorey-10);
        total = totalForFirstTen + totalForSecondTen;
        return total;
    }

    else
    {
        totalForFirstTen = 15 * 1000 * 10;
        totalForSecondTen = 12 * 1000 * 10;

        floorHeight = 10;
        totalBrickPerFloor = floorHeight * brickPerFeet;
        var totalForOthers = totalBrickPerFloor * (buildingStorey-20);
        total = totalForFirstTen + totalForSecondTen + totalForOthers;
        return total;
    }

}
var resCalculator = brickCalculator(15);
    console.log(resCalculator);

//tinyFriend for get smallest name
function tinyFriend(names){

    let smallestName = names[0];

    for (i = 0; i < names.length; i++) 
    {
        let element = names[i];
        if (element == "" || element == " ")
        {
            return 'Please provide atleast one character name value in your array.'
        }
        if (element.length < smallestName.length)
        {
            smallestName = element;
        }
    }
    return smallestName;
}
var smallestNameResult = tinyFriend(["Kamal", "Ranu", "Jan", "Hasan", "Babu"]);
console.log(smallestNameResult);





//brickCalculator
// function brickCalculator(buildingStorey){
//     const brickPerFeet = 1000;
//     let floorHeight = 15;
//     let brickRequiredPerFloor = floorHeight * brickPerFeet;
//     let totalBrick = 0;

//     if(buildingStorey <= 0)
//     {
//         return 'Building must be non negative or greater then 0';
//     }
//     else if(buildingStorey <= 10)
//     {
       
//         totalBrick = brickRequiredPerFloor * buildingStorey;
//         return totalBrick;
//     }

//     else if(buildingStorey > 10 && buildingStorey <= 20)
//     {
        
//         floorHeight = 12;
//         brickRequiredPerFloor += floorHeight * brickPerFeet;
//         totalBrick += brickRequiredPerFloor;

//         return totalBrick;
//     }
// }
// var res = brickCalculator(11);
//     console.log(res);



