function handleGuessingGame() {
    let textinput = document.getElementById("guessing-game-textinput");
    let submitButton = document.getElementById("guessing-game-submit-button")
    let message = document.getElementById("guessing-game-message");

    let number;

    submitButton.addEventListener("click", () => {
        let guess = parseInt(textinput.value);
        textinput.value = "";

        if (isNaN(guess)) {
            message.innerText = "Hinweis: Keine Zahl angegeben!";
            return;
        }

        if (guess < 1 || guess > 100) {
            message.innerText = "Hinweis: Zahl muss zwischen 1 und 100 sein!";
            return;
        }

        if (guess < number) {
            message.innerText = `Hinweis: Die gesuchte Zahl ist größer als ${guess}`;
            return;
        } else if (guess > number) {
            message.innerText = `Hinweis: Die gesuchte Zahl ist kleiner als ${guess}`;
            return;
        }

        message.innerText = `${guess} ist richtig! Drücke 'Reset' um nochmal zu spielen.`;
        textinput.disabled = true;
        submitButton.disabled = true;

    });

    function resetGuessingGame() {
        number = Math.floor(Math.random() * 100) + 1;
        message.innerText = "Hinweis:";
        textinput.value = "";
        textinput.disabled = false;
        submitButton.disabled = false;
    }

    document.getElementById("guessing-game-reset").addEventListener("click", resetGuessingGame);

    resetGuessingGame();
}

function handleTicTacToe() {
    let player1 = document.getElementById("ttt-player-1");
    let player2 = document.getElementById("ttt-player-2");
    let message = document.getElementById("ttt-message");

    let nextPlayer;
    let turnNumber;
    let b;
    let initialized = false;

    document.querySelectorAll("#ttt-board td").forEach((element, index) => {
        element.addEventListener("click", () => {
            if (!initialized || b[index] !== -1) return;

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
                    message.innerText = `${player1.value || player1.placeholder} hat gewonnen! Drücke 'Reset' um nochmal zu spielen.`;
                    initialized = false;
                    return;
                } else if (line.every((val) => val === 1)) {
                    message.innerText = `${player2.value || player2.placeholder} hat gewonnen! Drücke 'Reset' um nochmal zu spielen.`;
                    initialized = false;
                    return;
                }
            }

            if (turnNumber === 9) {
                message.innerText = "Unentschieden! Drücke 'Reset' um nochmal zu spielen.";
                initialized = false;
            }
        });
    });

    function resetTicTacToe() {
        nextPlayer = 0;
        turnNumber = 0;
        b = [
            -1, -1, -1,
            -1, -1, -1,
            -1, -1, -1
        ];

        document.querySelectorAll("#ttt-board td").forEach((element) => {element.innerText = ""});
        message.innerText = "";

        initialized = true;
    }

    document.getElementById("ttt-reset").addEventListener("click", resetTicTacToe);

    resetTicTacToe();
}

window.addEventListener("DOMContentLoaded", () => {
    handleGuessingGame();
    handleTicTacToe();
});
