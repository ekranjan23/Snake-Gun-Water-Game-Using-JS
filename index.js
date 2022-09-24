
let game = alert("Let's Play the Snack, Water and Gun Wala Game ")
console.log(game)
function generateSWG() {
    const alphabet = "swg"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
let playAgain = true;

while (playAgain) {
    let computer = generateSWG();
    console.log(computer);
    let you = prompt("Enter the 'S', 'W', 'G'");;
    console.log(you);

    if (computer == 's' && you == 's' || computer == 'w' && you == 'w' || computer == 'g' && you == 'g')
        document.write("Match is draw!!!😂😂😂");

    else if (computer == 's' && you == 'g')
        document.write("You Wins the game 🤞🤞🤞🤞");

    else if (computer == 'g' && you == 's')
        document.write("Computer Wins the game 🤞🤞🤞🤞");

    else if (computer == 's' && you == 'w')
        document.write("Computer Wins the game 🤞🤞🤞🤞");

    else if (computer == 'w' && you == 's')
        document.write("You Wins the game 🤞🤞🤞🤞");

    else if (computer == 'w' && you == 'g')
        document.write("Computer Wins the game 🤞🤞🤞🤞");

    else if (computer == 'g' && you == 'w')
        document.write("You Wins the game 🤞🤞🤞🤞");

    document.write(" Computer value is\n:  ", computer)
    break;


}
playAgain = confirm("Try Again");
