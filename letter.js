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
    // THIS DOESN'T WORK AND I DON'T KNOW WHY
    this.checkGuess = function(letter) {
        if (letter === this.char) {
            this.guessed = true;
            this.guessedCorrectly();
        }
        console.log(this.char);
    }
};

module.exports = Letter;