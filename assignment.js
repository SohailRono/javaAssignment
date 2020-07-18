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
function brickCalculator(tala)
{
    var brickFeet = 1000;
    var floorHeight = 0;
    var totalBrickPerFloor = 0;
    var total = 0;
    var total10to20 = 0;

    for (let i = 1; i <= tala; i++) 
    {
        
        if(i <= 10)
        {
            floorHeight = 15;
            totalBrickPerFloor = brickFeet * floorHeight;
            total = totalBrickPerFloor * i;
        }
        else if(i > 10 && i <= 20)
        {
            floorHeight = 12;
            totalBrickPerFloor = brickFeet * floorHeight;
            total += totalBrickPerFloor * (i-10);
        }

        else(i > 20)
        {
            floorHeight = 10;
            totalBrickPerFloor = brickFeet * floorHeight;
            total += totalBrickPerFloor * (i-20);
        }
    }
    return total;
}

var s = brickCalculator(20);
console.log(s);


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



