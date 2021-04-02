"use strict";


let numbers = []

//this generates a array of 1-100 numbers (in order)
for(let i = 1; i <= 100; i++){
    numbers.push(i)
}

//this gets rid of a number (deletes it entirely)
//generates a random number between 1-100
let randoNum = Math.floor(Math.random() * (100 - 1) + 1)
console.log(randoNum + 1)
//takes out the random number and only the random number
numbers.splice(randoNum, 1);


//finds the missing number in the array by adding all of the numbers in the array and then subtracting that by the sum of 1-100
function haveYouSeenMe(array){
    //n becomes the last number of the array, added +1 because the array is missing a number (the one we took out)
    let n = array.length + 1;  // 100
    //this adds 1-100 (so its 1 + 2 + 3...)
    let total = (n*(n + 1))/2;  // 5050, in this case
    //total sum of the array
    let sum = 0;
    
    //goes over every element in the array, not by index
    for(let i = 0; i < array.length; i++){
        //this adds the elements in the array to sum, except the missing number
        sum += array[i]; //5050 - the missing number
    }

    return total - sum // 5050 - (5050 - missing number)
}

let finalAnswer = (haveYouSeenMe(numbers));

console.log(`the missing number is ${finalAnswer}`)

//based from https://medium.com/@briandsalemi/how-to-solving-the-missing-number-question-33b0426a9ba5