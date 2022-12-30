let g = "  Gautam  "
console.log(g.length)
console.log(g.toUpperCase())
console.log(g.toLowerCase())
console.log(g.slice(2, 4))  // G a u t a m   : starting index is ZERO and last accurance is not included like 4
console.log(g.slice(1)) // cut before part of first accurance and represent a full string 
console.log(g.replace('Gautam', 'Himani'))
console.log(g.trim())

let frd = "Himani"

console.log(g.concat("is a friend of ", frd))
console.log(g.indexOf('u'))

// Iterate the string using loop

for (let i = 0; i < frd.length; i++) {


    console.log(frd[i])

}
