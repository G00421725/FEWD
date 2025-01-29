//Part (a)

function countChar(value:string):number{
    return value.length;
}

function trimSpace(value:string):number {
    return value.trim().length;
}

function trimAndCount(myString:string, spaces?:boolean):number {//Question mark at the end of spaces makes the parameter optional
    let num:number;
    if (spaces) {
        num = myString.length
    }
    else {
        num = myString.trim().length;
    }

    return num;
}

console.log(countChar(" Test 1 "));
console.log(trimSpace(" Test 2 "));

console.log(trimAndCount(" Test 1 ", true));
console.log(trimAndCount(" Test 1 ", false));
console.log(trimAndCount(" Test 1 "));
