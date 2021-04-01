"use strict";

let RandoNums = []

//makes 10 random numbers between 1 and 5
for(let i = 0; i <= 9; i++){
    let num = Math.floor(Math.random() * (5 - 1) + 1);
    RandoNums.push(num)
}

//replaces duplicate numbers in the array RandoNums
function replaceDuplicates(){
    //loops through the elements while the second loop loops first
    for(let i in RandoNums){
        for(let j in RandoNums)
        //if the element is not the same as the next one and is not in the same position (what those two conditions below respectively do), it turns into '
        if (RandoNums[i] == RandoNums[j] && i != j){
            RandoNums[i] = ''
        }
    }
    return RandoNums
}

console.table(replaceDuplicates(RandoNums));