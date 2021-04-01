"use strict";


let numbers = []

//this generates a array of 1-100 numbers (in order)
for(let i = 1; i <= 100; i++){
    numbers.push(i)
}
//peoblem here
//this gets rid of a number (deletes it entirely)
for(let i in numbers){
    //generates a random number between 1-100
    let randoNum = Math.floor(Math.random() * (100 - 1) + 1)
    //if the random number is
    if(randoNum == numbers[i]){
        numbers[i] -= num
    }
    return numbers[i]
}


console.log(numbers)


function haveYouSeenMe(array){
    //n becomes the last number of the array
    let n = array.length + 1;
    //add from 1 to the last number of the array (thank you Carl Friedich Gauss)
    let total = (n*(n + 1))/2;
    let sum = 0;
    
    //goes over every element in the array
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return total - sum
    
}

console.log(haveYouSeenMe(numbers));

//let finalAnswer = (haveYouSeenMe(numbers))


//console.log(`the missing number is ${numbers}`)

//took *very* close notes from https://medium.com/@briandsalemi/how-to-solving-the-missing-number-question-33b0426a9ba5