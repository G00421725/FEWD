var flag = true; //Declaring the boolean variable flag and assigned it a value
console.log("Value assigned to flag is " + flag); //Outputting the variable to the console
var name1 = "Ryan"; //Declaring the string variable name and assigned it a value
console.log("Value assigned to name is " + name1); //Outputting the variable to the console
var num = 5; //Declaring the number variable num and assigned it a value
console.log("Valie assigned to num is " + num); //Outputting the variable to the console
var list = [4, 5, 6]; //Declaring the array variables list and assigned the array a list of values
console.log("Values assigned to list are " + list); //Outputting the variable to the console
var nums;
(function (nums) {
    nums[nums["value1"] = 1] = "value1";
    nums[nums["value2"] = 5] = "value2";
    nums[nums["value3"] = 6] = "value3";
})(nums || (nums = {}));
; //Declaring the enum variables nums and assigned 3 variables in it values
console.log(nums.value1); //Outputting the variable to the console
var myArray = [2, 4, 6]; //Declaring another array using a different method calling it myArray and assigning a list of values to it
for (var i = 0; i < myArray.length; i++) { //Defining the conditions for the for loop
    console.log("Element: " + myArray[i] + "is in my array."); //Outputting the variable to the console for each itteration of the array
}
myArray.forEach(function (Element) {
    console.log("Element: " + Element); //Outputting the variable to the console
});
myArray.forEach(function (Element) {
    console.log("Element: " + Element); //Outputting the variable to the console
});
var unknown = "hello"; //Declaring the any variable unknown and assigned it a value, with the any data type it can be a string, number etc...
console.log("The value of unknown is: " + unknown); //Outputting the variable to the console
