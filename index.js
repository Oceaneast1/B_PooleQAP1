const _ = require('lodash')
const moment = require('moment')

// outputs the current date and time
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));



// Underscore _ is a global object for the lodash library
// using _.find to find different parts of am Array

// const randomArr = [

// {firstName: "Barry", lastName: "Poole", Age: "53", Gender: "male"},
// {firstName: "Tianna", lastName: "Ryan", Age: "17", Gender: "female"},
// {firstName: "Madeline", lastName: "Poole", Age: "86", Gender: "female"},
// {firstName: "Bonnie", lastName: "Poole", Age: "49", Gender: "female"}

// ];

// const Arrays = _.find(randomArr, {lastName: "Ryan"});

// const Arrays1 = _.find(randomArr, {Age: "86"});

// const Arrays2 = _.find(randomArr, {lastName: "Poole", Gender: "female"});

// const Arrays3 = _.find(randomArr, {firstName: "Bonnie"});

// console.log(Arrays)
// console.log(Arrays1)
// console.log(Arrays2)
// console.log(Arrays3)