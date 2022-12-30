let random_nm = Math.random(100) * 1000
random_nm = Math.floor(random_nm)

let guesses = 10

while (guesses >= 0) {




    if (guesses != 0) {


        let nm = prompt("Guess The Number")
        nm = Number.parseInt(nm)
        if (nm < random_nm) {


            if (guesses > 3) {
                console.warn("Lesser  : ", guesses, "Chanses Left")
            } else {
                console.error("Lesser  : ", guesses, "Chanses Left")
            }
        }
        else if (nm == random_nm) {
            console.log("Congratulations !  You Guess The Right Answer ")
            break

        }
        else {


            if (guesses > 3) {
                console.warn("Greaterer  : ", guesses, "Chanses Left")
            } else {
                console.error("Greaterer  : ", guesses, "Chanses Left")
            }
        }
    } else {
        console.log("Correct Answer  :", random_nm)
    }
    guesses -= 1
}
