"use strict";


/*let numbers = []

for(let i = 1; i <= 100; i++){
    numbers.push(i)
}

for(let i in numbers){
    numbers.push(i)
}*/

let numbers = ['1', '2', '4', '5']

function haveYouSeenMe(array){
    //n becomes the last number of the array
    let n = array.length + 1;
    //add from 1 to the last number of the array (thank you Carl Friedich Gauss)
    let total = (n*(n + 1))/2;
    let sum = 0;
    
    //goes over every element in the array
    for(let i in array){
        sum += array[i];
    }
    return total - sum
}

//goes through the array and counts up(?)
//breaks when a number is missing

console.table(haveYouSeenMe(numbers));

//took very close notes from https://medium.com/@briandsalemi/how-to-solving-the-missing-number-question-33b0426a9ba5