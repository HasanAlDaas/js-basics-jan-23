function familyTrip(input){
    let budget = Number(input[0]);
    let nigtsCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let percentAdditionalSpendings = Number(input[3]) /100;

    let totalNigtsPrice = nightPrice * nigtsCount;
    let newPercent = percentAdditionalSpendings * budget

    let totalSum = 0 

    if (nigtsCount > 7) {
        totalSum = 0.95 *totalNigtsPrice + newPercent 
    } else {
        totalSum = totalNigtsPrice + newPercent
    } 

    if (budget >= totalSum){
        let moneyLeft = budget - totalSum;
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        let moneyNeeded = totalSum - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`)

}   
    
}

familyTrip(["800.50","8","100","2"])