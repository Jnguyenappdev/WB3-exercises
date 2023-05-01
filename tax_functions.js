// create three function
// 1. getSocSecTax() accepts gross pay and returns social security tax on amount
//      assume tax rate of 62%
// 2. getMedicareTax() accepts a gross pay and returns the medicare tax on that amount
//      assume tax rate of 1.45%
// 3. getFederalTax() accepts gross pay and withholding code 
//      and returns the ferderal tax withholding

//-------------------------------

// 1.

function getSocSecTax(grossPaySocSec){
    const socSecTaxRate = 62
    let socSecTaxAmount = grossPaySocSec * (socSecTaxRate/100)
    return socSecTaxAmount
}

let socSecTaxAmount = getSocSecTax(20000)
console.log(`Social Security Amount: $ ${socSecTaxAmount.toFixed(2)}`)

// 2. 

function getMedicareTax(grossPayMedicare){
    const medicareTaxRate = 1.45
    let medicareAmount = grossPayMedicare * (medicareTaxRate/100)
    return medicareAmount
}

let medicareAmount = getMedicareTax(200)
console.log(`Medicare Amount: $ ${medicareAmount.toFixed(2)}`)

// 3.

function getFederalTax(grossPayFederal, withholdingCode){
    if ( withholdingCode == 0 ){
        tax = 23/100
    } else if ( withholdingCode == 1 ){
        tax = 21/100
    } else if ( withholdingCode == 2 ){
        tax = 19.5/100
    } else if ( withholdingCode == 3 ){
        tax = 18.5/100
    } else if ( withholdingCode >= 4 ){
        tax = (18/100) - (( withholdingCode - 4 ) * (.5/100))
    }

    let withholdingAmount = grossPayFederal * tax
    return withholdingAmount.toFixed(2)
}

let withholdingAmount  = getFederalTax(750, 0)
console.log(`Person 1: Withholding Amount: $ ${withholdingAmount}`)

withholdingAmount  = getFederalTax(1550, 2)
console.log(`Person 2: Withholding Amount: $ ${withholdingAmount}`)

withholdingAmount  = getFederalTax(1100, 6)
console.log(`Person 3: Withholding Amount: $ ${withholdingAmount}`)