// this all codes run in browsers console part
console.error("this is an error") // shows a string as an error
console.assert(555 > 32)  // if condtions true , returns : none  , else assertion failed
console.assert(555 < 32)
// console.clear() //clear the console

let a = {
    a: 10,
    b: 20,
    c: 30
}
console.table(a)  // represents as table
console.warn("Dont Drive if you are under age")  // represents as an warining

console.info("information") // represent in info section and similiar as console.log

console.time("WhileLoop") // start the timing count
let i = 0
while (i < 10) {
    console.log(i)
    i++
}
console.timeEnd("WhileLoop") // ending the timing count and prints how much time spend to perform between time and timeEnd function


