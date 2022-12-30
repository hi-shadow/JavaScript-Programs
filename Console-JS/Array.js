let arr = ["gautam", "sagar", "sunny", "gediya", "khara"]

for (i in arr) {
    console.log(arr[i])
}

console.log()
// adding a new element of array
arr[5] = "Akshay"
for (i in arr) {
    console.log(arr[i])
}

// Array Methods

console.log(arr.toString())  // converts array to the string

console.log(arr.join(" - "))  // Gautam - sagar - sunny - ....... (and its converts into string)

let poped = arr.pop() // remove last element and returns the poped element
console.log(poped, arr)

arr.push("Duhera")
console.log(arr)

let shifted = arr.shift() // remove first element and returns the poped element
console.log(shifted, arr)

let unshift = arr.unshift("Gautam Vaja") // Add  element to the first and returns the lenth of array
console.log(unshift, arr)

//.concate : Concatination of 2 array in js and represent a new array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let c = a.concat(b) // generate new array bcz of  store in let c
console.log(c)
console.log(a.concat(b)) // you can print like this also

let d = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
let newarr = a.concat(b, d)
console.log(newarr)

let x = [11, 32, 43, 53, 34, 232, 245, 756,]
x.sort() // its change original array and its sorting by alphabaticle 
console.log(x)
// if you want to sorting by numeric you can alsor provide an argument as an function like this

let compare = (a, b) => {
    return a - b
}
x.sort(compare)
console.log(x)

x.reverse() // reverse the array


// splice function : its take 3-4 argument and
// 1st argument : whats the index you want in insert it
// 2st argument : how many numbers you want to delete
// 3rd argument  : how many add you want to add it

let spl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
spl.splice(0, 3, 1001, 1002, 1003, 1004, 1005) // 0 index  , 3 element delete , after all args as insert
console.log(spl)


let slc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(slc.slice(2)) // print from  index is two
console.log(slc.slice(2, 5)) // print from  2nd  index and ends with 5th index

// Array.fom  : used for craeting a array from any other types of datatypes like Object
//  imagine you have one HTML collection names " A" and you want o convert them into array so you can use it like Array.from(a)
// now we create a string and make it array using array.from function

let str = "Gautam"
let str_ary = Array.from(str)
console.log(str_ary)

let z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for in loop
for (let i in z) {
    // console.log(i) // this will print index , not element of loop
    console.log(z[i]) // this will print element of z of i index [prints : elements] 
}

// you can use for of loop to print the element of array 

// for of loop
for (let i of z) {
    console.log(i)

}

// for each loop : its take a function with one argument and works with it
z.forEach((Element) => {
    console.log(Element)
})
