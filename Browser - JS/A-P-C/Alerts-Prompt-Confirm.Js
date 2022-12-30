alert("are you in danger zone")
let nm = prompt("Whats Your Name ?")
document.write(nm)  // Write those String who entered in Promt in HTML page
console.log(typeof nm) // Its returns String Because Prompt input as a string , you can convert into other datatypes

// sum using prompt
let num1 = prompt("Enter First Number")
num1 = Number.parseInt(num1)

let num2 = prompt("Enter Second Number")
num2 = Number.parseInt(num2)

document.write(num1 + num2)

// Prompt has 2 args 1st: Message 2nd: Default Value
prompt("Hey !", "Hiii")


// confirmBox

let cnfm = confirm("Are You Sure ?")
console.log(cnfm)// If user clicks YES   variable store true or 1 either false or 0

if (cnfm == true) {
    document.write("You Clicked Yes")
}
else {
    document.write("You Clicked NO")
}