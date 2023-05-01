//create function called convertFtoC
// accepts temperature in Fahrenheit and returns celcius equivalent



function convertFtoC (currentTemp){
    let celciusTemp = ( currentTemp - 32 )* (5/9);
    return celciusTemp;
}

let celciusTemp = convertFtoC(212);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);

celciusTemp = convertFtoC(90);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);

celciusTemp = convertFtoC(72);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);

celciusTemp = convertFtoC(32);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);

celciusTemp = convertFtoC(0);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);

celciusTemp = convertFtoC(-40);
console.log(` ${celciusTemp.toFixed(2)} Celcius`);
