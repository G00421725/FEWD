//Part (a)
function countChar(value) {
    return value.length;
}
function trimSpace(value) {
    return value.trim().length;
}
function trimAndCount(myString, spaces) {
    var num;
    if (spaces) {
        num = myString.length;
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
