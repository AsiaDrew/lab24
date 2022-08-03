"use strict";
exports.__esModule = true;
//array
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
//functions
//function functionName(parameters):returnType{ }
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    mountains.forEach(function (m) {
        if (m.height > tallestMountain.height) {
            tallestMountain = m;
        }
    });
    return tallestMountain.name;
}
var tallest = findNameOfTallestMountain(mountains);
console.log(tallest);
var products = [
    {
        name: "Coffee Cup",
        price: 4.99
    },
    {
        name: "Cook Book",
        price: 29.95
    },
    {
        name: "Frying pan",
        price: 11.99
    },
    {
        name: "Tower Fan",
        price: 25.00
    },
    {
        name: "Drone",
        price: 4000
    },
];
function calcAverageProductPrice(productArray) {
    var averagePrice = 0;
    // sums all prices
    productArray.forEach(function (product) {
        averagePrice += product.price;
    });
    // divides by the amount of prices to get avg
    averagePrice = averagePrice / productArray.length;
    // round to 2 decimals
    averagePrice = Math.round(averagePrice * 100) / 100;
    return averagePrice;
}
var average = calcAverageProductPrice(products);
console.log(average);
var inventory = [
    {
        product: { name: "motor", price: 10.00 },
        quantity: 10
    },
    {
        product: { name: "sensor", price: 12.50 },
        quantity: 4
    },
    {
        product: { name: "LED", price: 1.00 },
        quantity: 20
    }
];
function calcInventoryValue(inventory) {
    var totalValue = 0;
    inventory.forEach(function (item) {
        totalValue += item.product.price * item.quantity;
    });
    return totalValue;
}
var totalValue = calcInventoryValue(inventory);
console.log(totalValue);
