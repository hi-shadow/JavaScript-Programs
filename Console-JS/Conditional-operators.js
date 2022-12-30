let animal = ""
if (animal == "Dog") {
    console.log("Animal is dog")
}
else if (animal == "Cat") {
    console.log("Animal Is Cat")
}
else if (animal == "Horse") {
    console.log("Animal is Horse")
}
else {
    console.log("You Are Donkey ! \nValid Animal Nahi Dal Sakta kya !")
}
console.log("\n \n")
// Ternery Operator (One liner If else statment)
age = 20
console.log("you can", age <= 18 ? "not drive" : "drive")

console.log("\n \n")

switch ("RasGulla") {
    case "Pendo":
        console.log("Mithai is Pendo")
        break;
    case "RasGulla":
        console.log("Mithai is Ras-Gulla")
        break;
    case "BanganBhaja":
        console.log("Mithai is BanganBhaja")
        break;
    case "Sondesh":
        console.log("Mithai is Sondesh")
        break;

    default:
        console.log("Mithai is nor available in this planet \n please find in another planet")
}