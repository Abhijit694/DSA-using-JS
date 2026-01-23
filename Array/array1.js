let myName = "Shyam Nayak"
console.log(myName)

// ----------------- Different ways to creating an array -------------------

// 1. --------- Creating array using square brackets

// string array
let myNAmesArray = ["Ram","Shyam"]
console.log(myNAmesArray)

// number array
let mathScore = [90,80,65,76,54,60,65]
console.log(mathScore);

// object array
let students = [
    { name: "Ram", country: "India", state: "Maharastra"},
    { name: "Shyam", country: "India", state: "Maharastra"}
]
console.log(students);


// 2. --------- Creating array using Arrray Constructor

let arr1 = new Array()
console.log(arr1);

let arr2 = new Array(5)
console.log(arr2);
console.log(arr2[3]);

let arr3 = new Array()
arr3[0] = 2
arr3[1] = 3
console.log(arr3)

let arr4 = new Array("Ram","Shyam")
console.log(arr4);


// 3. ---------- Creating array using Array fill method

let arr5 = new Array(5).fill(0)
console.log(arr5);


// 4. ----------- Creating array using Array.of

let arr6 = Array.of("of","Ram","Shyam")
console.log(arr6);


// 5. ----------- Creating array using Array.from

let arr7 = Array.from("Hello World")
console.log(arr7);


// 6. ----------- Creating Sparse Array: Array with empty slots

let arr8 = [4, , , ,6, ,7]
let arr9 = [4,,,,5]
console.log(arr8);
console.log(arr9);
console.log(arr9.length); //5


// 7. ----------- Creating Array using spread operator(Putting values using spread operator)

let arr10 = ["Plus",...arr6]
console.log(arr10);





// --------------------------------- How to access array elements -----------------------------------
let fruits = ["mango","banana","apple"]

// Using bracket notation
let fruit1 = fruits[0]
let fruit2 = fruits[1]
let fruit3 = fruits[2]
console.log(fruit1,fruit2,fruit3);

// Using Destructuring Assignment
let [fruit11,fruit22,fruit33] = fruits
console.log(fruit11,fruit22,fruit33);


// --------------------------------- Iterating over an array ----------------------------------

// Using for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// Using while loop
let k = 0
while(k<fruits.length){
    console.log(fruits[k]);
    k++
}

// Using for of loop
for(let val of fruits){
    console.log(val);
}

// Using foreach loop
fruits.forEach((val) => console.log(val))


// ------------------------------- Common array methods ---------------------------------
// arr.push(ele) -> Add "ele" at end of the array
// arr.pop() -> Removes the last element
// arr.shift() -> Removes the 1st elememt
// arr.unshift(ele) -> Add "ele" at start of the array
// arr.map(cb) -> run callback function for each element of the array



// ------------------ Multidimensional array(array inside an array) ----------------------

let twoDimensionalArr = [
    [1,2,3],
    [4,5,6]
]
console.log(twoDimensionalArr);
console.log(twoDimensionalArr[0][1]);

let threeDimensionalArr = [
    [
        [1,2,3],
        [4,5,6]
    ],
    [
        [7,8,9],
        [11,12,13]
    ]
]
console.log(threeDimensionalArr);
console.log(threeDimensionalArr[0][0][2]);