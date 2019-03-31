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
    this.checkGuess = function(asdf, letter) {
        if (asdf === letter) {
            this.guessed = true;
            this.guessedCorrectly();
            console.log('yep!');
        } else {
            console.log('nope!')
        }
    }
};

// let check = new Letter('b', false);
// console.log(check);
// console.log(check.checkGuess('b', check.char));
// console.log(check.guessed);


module.exports = Letter;