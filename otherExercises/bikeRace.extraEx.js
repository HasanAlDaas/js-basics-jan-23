function bikeRace(input) {
 
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trackType = input[2];
 
    let taxJuniors = 0;
    let taxSeniors = 0;
    
    switch (trackType) {
        case 'trail':
            taxJuniors = 5.50;
            taxSeniors = 7;
            break;
 
        case 'cross-country':
            taxJuniors = 8;
            taxSeniors = 9.50;
            break;
 
        case 'downhill':
            taxJuniors = 12.25;
            taxSeniors = 13.75;
            break;
 
        case 'road':
            taxJuniors = 20;
            taxSeniors = 21.50;
            break;
    }
  
    let taxJuniorsAll = taxJuniors * juniorsCount;
    let taxSeniorsAll = taxSeniors * seniorsCount;
 
    let taxAll = (taxJuniorsAll + taxSeniorsAll) - (taxJuniorsAll + taxSeniorsAll) * 0.05;
    if (trackType === "cross-country" && (seniorsCount + juniorsCount) >= 50) {
        taxAll *= 0.75
    }

    console.log(taxAll.toFixed(2)) 
 
}
bikeRace(['24', '26', 'cross-country'])