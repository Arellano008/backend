document.addEventListener('DOMContentLoaded', () => {
    const words = ['computadora', 'teclado', 'monitor', 'programacion', 'algoritmo'];
    const maxTries = 6;
    let tries = 0;
    let word = words[Math.floor(Math.random() * words.length)];
    let guessedWord = Array(word.length).fill('_');
    let wrongLetters = [];

    const wordElement = document.getElementById('word');
    const wrongLettersElement = document.getElementById('wrong-letters');
    const triesElement = document.getElementById('tries');
    const messageElement = document.getElementById('message');
    const guessInput = document.getElementById('guess-input');
    const submitGuess = document.getElementById('submit-guess');
    const hangmanDrawing = document.getElementById('hangman-drawing');

    function updateHangmanDrawing(tries) {
        const drawings = [
            "  +---+\n      |\n      |\n      |\n     ===\n",
            "  +---+\n  O   |\n      |\n      |\n     ===\n",
            "  +---+\n  O   |\n  |   |\n      |\n     ===\n",
            "  +---+\n  O   |\n /|   |\n      |\n     ===\n",
            "  +---+\n  O   |\n /|\\  |\n      |\n     ===\n",
            "  +---+\n  O   |\n /|\\  |\n /    |\n     ===\n",
            "  +---+\n  O   |\n /|\\  |\n / \\  |\n     ===\n"
        ];
        hangmanDrawing.textContent = drawings[tries];
    }

    function updateDisplay() {
        wordElement.textContent = guessedWord.join(' ');
        wrongLettersElement.textContent = wrongLetters.join(', ');
        triesElement.textContent = maxTries - tries;
    }

    function checkWin() {
        if (guessedWord.join('') === word) {
            messageElement.textContent = '¡Felicidades! Has ganado.';
            submitGuess.disabled = true;
        }
    }

    function checkLose() {
        if (tries >= maxTries) {
            messageElement.textContent = `Has perdido. La palabra era: ${word}`;
            submitGuess.disabled = true;
        }
    }

    submitGuess.addEventListener('click', () => {
        const guess = guessInput.value.toLowerCase();
        guessInput.value = '';
        messageElement.textContent = '';

        if (!guess || guess.length !== 1 || !/^[a-zñ]$/.test(guess)) {
            messageElement.textContent = 'Por favor, ingresa una letra válida.';
            return;
        }

        if (guessedWord.includes(guess) || wrongLetters.includes(guess)) {
            messageElement.textContent = 'Ya has ingresado esa letra.';
            return;
        }

        if (word.includes(guess)) {
            word.split('').forEach((letter, index) => {
                if (letter === guess) {
                    guessedWord[index] = guess;
                }
            });
            checkWin();
        } else {
            wrongLetters.push(guess);
            tries++;
            updateHangmanDrawing(tries);
            checkLose();
        }

        updateDisplay();
    });

    // Inicializa la visualización
    updateHangmanDrawing(tries);
    updateDisplay();
});
