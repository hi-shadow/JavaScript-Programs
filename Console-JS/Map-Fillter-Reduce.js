let arr = [1000, 2000, 3000, 4000, 5000]

// all facilities of MAP in JavaScript

arr.map((Element, index) => {
    console.log(Element) //prints value of array 
})

// you can also prints a value with indexes of element
arr.map((Element, index) => {
    console.log(Element, index) // first its prints values and second its prints index of element

})

// you can also prints a value with indexes of element and generated new array like this
arr.map((Element, index, array) => {
    console.log(Element, index, array) // first its prints values and second its prints index of element and after that prints generated new array

})

// you can also perform a operation on each element of array and map generates the new array like this
let new_array = arr.map((Element, index, array) => {
    console.log(Element, index) // first its prints values and second its prints index of element 
    return Element * index
})
console.log(new_array)



// fillter function returns filltered array based on condition

let filltered_arr = arr.filter((Element) => {
    return Element >= 3000
})
console.log(filltered_arr) // prints only elements who >=3000 value

// Reduce Function
//  reduce method operation on last result means  you write a sum function within reduce on arr so reduce function work like this
// [1000, 2000 , 3000 , 4000 , 5000]
// -----------------function performs----------------
// 1000+2000 = 3000
// 3000+3000 = 6000
// 6000+4000 = 10000

let reduced_arr = arr.reduce((Element_1, Element_2) => {
    return Element_1 + Element_2
})
