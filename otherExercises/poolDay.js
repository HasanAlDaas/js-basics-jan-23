function pool(input){
let peopleCount = Number(input[0]);
let tax = Number(input[1]);
let shezlongTax = Number(input[2]);
let umbrelaTax = Number(input[3]);

let shezlongPrice = Math.ceil(peopleCount * 0.75) * shezlongTax;
let umbrelaPrice = Math.ceil(peopleCount * 0.5) * umbrelaTax;
let entrencePrice = peopleCount * tax;

let fullPrice = (shezlongPrice + umbrelaPrice + entrencePrice).toFixed(2)
console.log(`${fullPrice} lv.`)  ;

}


pool(['21','5.50','4.40','6.20'])
