//Part (a)

function countChar(value:string):number{//defining the function countChar and passing through a string variable ":number" makes sure it returns a number
    return value.length;
}

function trimSpace(value:string):number {//defining the function trimSpace and passing through a string variable ":number" makes sure it returns a number
    return value.trim().length;
}

function trimAndCount(myString:string, spaces?:boolean):number {//defining the function trimAndCount and passing through a string and boolean variable Question mark at the end of spaces makes the parameter optional
    let num:number;//defining the variable num
    if (spaces) {//If spaces is true it will return the number of characters including the spaces
        num = myString.length//assigning the length of myString to the variable num
    }
    else {//If spaces is false it will return the number of characters not including the spaces
        num = myString.trim().length;//assigning the length of myarray to the variable num excluding the spaces
    }

    return num;//returns the value of num
}

console.log(countChar(" Test 1 "));//passes the text through the function and outputs it to the console
console.log(trimSpace(" Test 2 "));//passes the text through the function and outputs it to the console

console.log(trimAndCount(" Test 1 ", true));//passes the text through the function and outputs it to the console
console.log(trimAndCount(" Test 1 ", false));//passes the text through the function and outputs it to the console
console.log(trimAndCount(" Test 1 "));//passes the text through the function and outputs it to the console, this also proves the question mark in the function trimAndCount that it doesn't need the boolean value
