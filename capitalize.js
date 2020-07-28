'use strict'

const capitalizeString = (data) => {
  let capitalizeWord = data.split('');
  capitalizeWord.every( (letter, index) => { 
    if (index !== 0) return false;

    if (letter.match(/[a-z]/)) {
      capitalizeWord[index] = letter.toUpperCase();
    }
  });
  return capitalizeWord.join('');
};

module.exports = capitalizeString;