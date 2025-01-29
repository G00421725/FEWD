let flag: boolean = true;//Declaring the boolean variable flag and assigned it a value
console.log("Value assigned to flag is " + flag);//Outputting the variable to the console

let name1: string = "Ryan";//Declaring the string variable name and assigned it a value
console.log("Value assigned to name is " + name1);//Outputting the variable to the console

let num: number = 5;//Declaring the number variable num and assigned it a value
console.log("Valie assigned to num is " + num);//Outputting the variable to the console

let list: number[] = [4,5,6];//Declaring the array variables list and assigned the array a list of values
console.log("Values assigned to list are " + list);//Outputting the variable to the console

enum nums {value1 = 1,value2 = 5, value3 = 6};//Declaring the enum variables nums and assigned 3 variables in it values
console.log(nums.value1);//Outputting the variable to the console

let myArray: Array<number> = [2,4,6];//Declaring another array using a different method calling it myArray and assigning a list of values to it

for(let i = 0; i<myArray.length; i++) {//Defining the conditions for the for loop
    console.log("Element: " + myArray[i] + "is in my array.")//Outputting the variable to the console for each itteration of the array
}

myArray.forEach(function(Element){//Creates a loop that goes through the array for each element in the array
    console.log("Element: " + Element)//Outputting the variable to the console
})

myArray.forEach((Element) =>{//Creates a loop that goes through the array for each element in the array
    console.log("Element: " + Element)//Outputting the variable to the console
})

let unknown:any = "hello";//Declaring the any variable unknown and assigned it a value, with the any data type it can be a string, number etc...
console.log("The value of unknown is: " + unknown);//Outputting the variable to the console