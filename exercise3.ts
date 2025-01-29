let flag: boolean = true;
console.log("Value assigned to flag is " + flag);

let name1: string = "Ryan";
console.log("Value assigned to name is " + name1);

let num: number = 5;
console.log("Valie assigned to num is " + num);

let list: number[] = [4,5,6];
console.log("Values assigned to list are " + list);

enum nums {value1 = 1,value2 = 5, value3 = 6};
console.log(nums.value1);

let myArray: Array<number> = [2,4,6];

for(let i = 0; i<myArray.length; i++) {
    console.log("Element: " + myArray[i] + "is in my array.")
}

myArray.forEach(function(Element){
    console.log("Element: " + Element)
})

myArray.forEach((Element) =>{
    console.log("Element: " + Element)
})

let unknown:any = "hello";
console.log("The value of unknown is: " + unknown);