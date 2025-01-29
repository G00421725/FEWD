var flag = true;
console.log("Value assigned to flag is " + flag);
var name1 = "Ryan";
console.log("Value assigned to name is " + name1);
var num = 5;
console.log("Valie assigned to num is " + num);
var list = [4, 5, 6];
console.log("Values assigned to list are " + list);
var nums;
(function (nums) {
    nums[nums["value1"] = 1] = "value1";
    nums[nums["value2"] = 5] = "value2";
    nums[nums["value3"] = 6] = "value3";
})(nums || (nums = {}));
;
console.log(nums.value1);
var myArray = [2, 4, 6];
for (var i = 0; i < myArray.length; i++) {
    console.log("Element: " + myArray[i] + "is in my array.");
}
myArray.forEach(function (Element) {
    console.log("Element: " + Element);
});
myArray.forEach(function (Element) {
    console.log("Element: " + Element);
});
var unknown = "hello";
console.log("The value of unknown is: " + unknown);
