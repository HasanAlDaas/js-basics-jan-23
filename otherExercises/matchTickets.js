function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let groupCount = Number(input[2]);
    
    let ticketPrice = 0;
    let transport = 0;

    switch (category) {
        case 'Normal':
            ticketPrice = 249.99 * groupCount;
            break;
        case 'VIP':
            ticketPrice = 499.99 * groupCount;
            break;
    }
    if (groupCount <= 4){
        transport = budget * 0.75;
    } else if (groupCount <= 9){
        budget *= 0.60;
    } else if (groupCount <= 24){
        transport = budget * 0.50;
    } else if (groupCount <= 49){
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }

    let totalMoney = transport + ticketPrice
    if (budget >= totalMoney){
    moneyLeft = budget - totalMoney 
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        moneyNeeded = totalMoney - budget
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`)
    }
}
matchTickets(["999.95","Normal","1"])