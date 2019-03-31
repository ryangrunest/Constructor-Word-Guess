function Letter(char, guessed) {
    this.char = char;
    this.guessed = guessed;
    this.guessedCorrectly = function() {
        if (this.guessed === true) {
            return this.char;
        } else {
            return '_';
        }
    };
    this.checkGuess = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
            this.guessedCorrectly();
        }
    }
};
let check = new Letter('a', false);
console.log(check);