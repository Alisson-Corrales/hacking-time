"use strict";

let RandoNums = []

//makes 25 random numbers between 1 and 20
for(let i = 0; i <= 25; i++){
    let num = Math.floor(Math.random() * (20 - 1) + 1);
    RandoNums.push(num)
}

//removes duplicate numbers in the array RandoNums
function removeDuplicates(){
    //this catches the elements that aren't copies
    let ogChars = []

    //this is what takes the duplicates out
    //
    RandoNums.forEach((n) => {
        //
        if(!ogChars.includes(n)){
            ogChars.push(n);
        }
    })

    return ogChars
}

//console.log(RandoNums);
console.log(removeDuplicates(RandoNums));


/*let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);*/