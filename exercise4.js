//Part (a)
function countChar(value) {
    return value.length;
}
function trimSpace(value) {
    return value.trim().length;
}
function trimAndCount(myString, spaces) {
    var num; //defining the variable num
    if (spaces) { //If spaces is true it will return the number of characters including the spaces
        num = myString.length; //assigning the length of myString to the variable num
    }
    else { //If spaces is false it will return the number of characters not including the spaces
        num = myString.trim().length; //assigning the length of myarray to the variable num excluding the spaces
    }
    return num; //returns the value of num
}
console.log(countChar(" Test 1 ")); //passes the text through the function and outputs it to the console
console.log(trimSpace(" Test 2 ")); //passes the text through the function and outputs it to the console
console.log(trimAndCount(" Test 1 ", true)); //passes the text through the function and outputs it to the console
console.log(trimAndCount(" Test 1 ", false)); //passes the text through the function and outputs it to the console
console.log(trimAndCount(" Test 1 ")); //passes the text through the function and outputs it to the console, this also proves the question mark in the function trimAndCount that it doesn't need the boolean value
