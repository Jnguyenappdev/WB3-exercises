//create function called convertCtoF
// accepts temperature in Fahrenheit and returns celcius equivalent



function convertCtoF (currentTemp){
    let fahrTemp = ( currentTemp * (5/9)) + 32 ;
    return fahrTemp;
}


let fahrTemp = convertCtoF(100);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);

fahrTemp = convertCtoF(45);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);

fahrTemp = convertCtoF(19);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);

fahrTemp = convertCtoF(0);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);

fahrTemp = convertCtoF(-7);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);

fahrTemp = convertCtoF(-40);
console.log(` ${fahrTemp.toFixed(2)} Fahrenheit`);