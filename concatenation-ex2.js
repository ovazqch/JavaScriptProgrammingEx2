/*
    JavaScript Programming
    Concatenation Exercise 2
    Oscar Vazquez
*/

let firstName = "Oscar";
let lastName = "Vazquez";
let age = 33;
let city = "Mexico City";
let married = true;
let firstJob = "Samsung"
let hourlyRate = 10;
hourlyRateCurrency = hourlyRate.toLocaleString('us-US', {style: 'currency',currency: 'USD', 
minimumFractionDigits: 2})

let message = 'Hello, ' + firstName + " " + lastName +  '. You are ' + age + ' years old and ' +
            'were born in ' + city + ', and currently live in Moncton. \n' + 'Your first job ' + 
            `was at ${firstJob} making ${hourlyRateCurrency}/hour. \n` +
            `I asked if you were married and you said ${married}.`;

console.log(message);