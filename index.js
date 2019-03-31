const word = require('./word.js');
const inquirer = require('inquirer');
const prompt = require('prompt');

let wordArray = [
    'velutinous',
    'nadir',
    'metathesis',
    'knackered',
    'impedimenta'
]


const chosenWord = new word(wordArray[parseInt(Math.random() * (wordArray.length + 1))]);
chosenWord.createLetters();
console.log(chosenWord);

let guessAgain = function(question) {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
          name: 'guess',
          message: 'Pick a letter'
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      for (var i = 0; i < chosenWord.letterArray.length; i++) {
          chosenWord.letterArray[i].checkGuess(answers.guess, chosenWord.letterArray[i].char);
          if (answers.guess === chosenWord.letterArray[i].char) {
              console.log('right!');
          } else {
              console.log('nope!');
          }
      }
    });
}



inquirer
.prompt([
    {
        type: 'confirm',
        name: 'question',
        message: 'Would you like to play a word guess game?'
    }
]).then(answers => {
    // console.log(answers.question);
    if (answers.question === true) {
        console.log('I am going to randomly pick a word, and you have to guess what it is,');
        console.log('letter by letter...');
        console.log('If you no longer wish to play, you can type "exit" into the prompt field');
        console.log('and the game will end.');
        inquirer.prompt([
            {
                type:'confirm',
                name: 'question',
                message: 'Are you ready to play?'
            }
        ]).then(answers => {
            if (answers.question === true) {
                console.log("Alright, let's get to it!");
                guessAgain();
            } else if (answers.question === false) {
                console.log('alright. Maybe later.');
            }
        })
    } else if (answers.question === false)  {
        console.log('awkward...');
    }
})