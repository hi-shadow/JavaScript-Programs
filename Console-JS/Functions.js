function isDrive(age) {
    if (age < 18) {
        console.log("You Cannot Drive")

    }
    else if (age == 18) {
        console.log("First Apply For Driving Licsence")
    }
    else {
        console.log("You can Drive")
    }
}
// New Type Of Function
let print = (message, times) => {

    let i = 1
    while (i <= times) {
        console.log(message, " : ", +i)
        i++
    }


}

isDrive(12)
print("Gautam Vaja", 10)