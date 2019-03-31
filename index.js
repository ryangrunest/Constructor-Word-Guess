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
// console.log(wordArray);
const chosenWord = new word(wordArray[parseInt(Math.random() * (wordArray.length + 1))]);
console.log(chosenWord);

let guessAgain = function(question) {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
          type: 'confirm',
          name: 'cheese',
          message: 'What is your name?'
      }
    ])
    .then(answers => {
      // Use user feedback for... whatever!!
      console.log(answers.cheese);
    });
}

guessAgain();
