const listOfItems = {
    "apple": 10,
    "banana": 20,
    "orange": 30,
    "grapes": 40,
};

const exchangeRateOfUSD = 80;

const convertPrices = (listOfItems, exchangeRateOfUSD) => {
    return Object.entries(listOfItems).map(([item, price]) => {
    return [item, price * exchangeRateOfUSD];
    });
};

const itemsInINR = convertPrices(listOfItems, exchangeRateOfUSD);

console.log(itemsInINR);
