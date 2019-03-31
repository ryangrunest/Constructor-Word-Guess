const letter = require('./letter.js');

function Word(word) {
    this.word = word;
    this.wordArray = word.split('');
    let letterArray = [];
    this.createLetters = function() {
        for (var i = 0; i < this.wordArray.length; i++)  {
            let newLetter = new letter(this.wordArray[i], false);
            letterArray.push(newLetter);
        }
        console.log(letterArray);
    }
    this.createString = function() {
        return console.log(this.wordArray.join(''));
    }
}

let checked = new Word('cheese');
console.log(checked);
checked.createLetters();
checked.createString();