// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// child nodes looks like array but iits not
// you can create array 

// let arr = Array.from(document.body.childNodes)
// console.log(arr)
let a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling) // its only output when your page source is compressed    

