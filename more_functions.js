//define three functions
//1. displayMailingLabel() accept five parameters:
//   name, address, city, state and zip code

//2. addNumber() accept two parameters: num1 num2 
//   add parameters together and display the change due

//3. displayReceipt() accept two parameters: toatlDue, amountPaid
//   if amount paid is less than the total due, 
//   display a message indicating how much more needs to be paid

//--------------------------------------------------------------------

//1.

function displayMailingLabel(name, address, city, state, zipcode){
    console.log(name);
    console.log(address);
    console.log(`${city}, ${state}, ${zipcode}`);
}

const firstLast = 'Julle Nguyen'
const address = '1234 Candy Cane Lane'
const city = 'Atlantis'
const state = 'Peach state'
const zipcode = '12345'

displayMailingLabel(firstLast, address, city, state, zipcode)

console.log('-------')

//--------------------------------------------------------------------

//2.

function addNumbers(num1 , num2){
    const num3 = num1 + num2;
    console.log(` ${num1} + ${num2} = ${num3}` );
}

//addNumber(1,3) 

const num1 = 5
const num2 = 5

addNumbers( num1, num2)

//--------------------------------------------------------------------

//3. 

console.log("-------")

function displayReceipt( totalDue, amountPaid){
    const CD = totalDue - amountPaid;
    console.log(`Total Due: $ ${totalDue.toFixed(2)}`);
    console.log(`Amount Paid: $ ${amountPaid.toFixed(2)}` );
    if (CD <= 0 ){
        console.log(`Change Due: $ ${Math.abs(CD.toFixed(2))}`);
    } else {
        console.log(`Owed Amount: $ ${Math.abs(CD.toFixed(2))}`);
    }
}

const totalDue = 100.50
const amountPaid = 60


displayReceipt( totalDue, amountPaid)