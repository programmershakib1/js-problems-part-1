// 12 inch 1 feef

// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// }


function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch. ';
    return result;
}

// const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);


const shuvoHeight2 = inchToFeet2(75);
// console.log(shuvoHeight2);


function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    return kilo;
}

const kilos = mileToKilometer(10);
console.log(kilos);

function kiloToMiles(kilo) {
    const mile = kilo * 0.62137119;
    return mile;
}

const miles = kiloToMiles(10);
console.log(miles);