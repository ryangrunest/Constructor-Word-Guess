class Letter {
    constructor(char, guessed) {
        this.char = char;
        this.guessed = guessed;
        guessedCorrectly = function() {
            if (this.guessed === true) {
                return this.char;
            } else {
                return '_';
            }
        }
    }
}