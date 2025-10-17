function handleGuessingGame() {
    let textinput = document.getElementById("guessing-game-textinput");
    let message = document.getElementById("guessing-game-message");

    let number = Math.floor(Math.random() * 100) + 1;

    document.getElementById("guessing-game-submit-button").addEventListener("click", () => {
        let guess = parseInt(textinput.value);

        if (isNaN(guess)) {
            message.innerText = "Keine Zahl angegeben!";
            return;
        }

        if (guess < 1 || guess > 100) {
            message.innerText = "Zahl muss zwischen 1 und 100 sein!";
            return;
        }

        if (guess < number) {
            message.innerText = "Größer";
            return;
        } else if (guess > number) {
            message.innerText = "Kleiner";
            return;
        }

        message.innerText = "Richtig";
        number = Math.floor(Math.random() * 100) + 1;
    });
}

function handleTicTacToe() {
    let message = document.getElementById("ttt-message");

    let nextPlayer;
    let turnNumber;
    let b;
    let initialized;

    document.querySelectorAll("#ttt-board td").forEach((element, index) => {
        element.addEventListener("click", () => {
            if (!initialized) {
                nextPlayer = 0;
                turnNumber = 0;
                b = [
                    -1, -1, -1,
                    -1, -1, -1,
                    -1, -1, -1
                ];

                if (initialized === false) {
                    document.querySelectorAll("#ttt-board td").forEach((element) => {element.innerText = ""});
                    initialized = true;
                    message.innerText = "";

                    return;
                }
                initialized = true;
            }

            if (b[index] !== -1) return;

            turnNumber++;
            b[index] = nextPlayer;
            element.innerText = ["O", "X"][nextPlayer];
            nextPlayer = 1 - nextPlayer;

            let lines = [
                b.slice(0, 3),
                b.slice(3, 6),
                b.slice(6, 9),
                [b[0], b[3], b[6]],
                [b[1], b[4], b[7]],
                [b[2], b[5], b[8]],
                [b[0], b[4], b[8]],
                [b[2], b[4], b[6]]
            ];


            for (const line of lines) {
                if (line.every((val) => val === 0)) {
                    message.innerText = "Player 0 has won";
                    initialized = false;
                    return;
                } else if (line.every((val) => val === 1)) {
                    message.innerText = "Player X has won";
                    initialized = false;
                    return;
                }
            }

            if (turnNumber === 9) {
                message.innerText = "Draw";
                initialized = false;
            }
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    handleGuessingGame();
    handleTicTacToe();
});
