const checkUserName = require('./checkUserName'); 
const checkTemperature = require('./checkTemperature'); 
const loginEmail = require('./loginEmail'); 


console.log(checkUserName("nook"));


console.log(checkTemperature(40));
console.log(checkTemperature(31));
console.log(checkTemperature(30));
console.log(checkTemperature(21));
console.log(checkTemperature(20));
console.log(checkTemperature(10));
console.log(checkTemperature(-25));