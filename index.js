//1. titleCased
//===============
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    const wordsInTutorial = tutorial.split(" "); //set up comma-separation
    // console.log(wordsInTutorial);
    const splitWords = wordsInTutorial.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    });
    // console.log(splitWords);
    const capitalizedPhrase = splitWords.join(" "); //replace comma with space
    // console.log(capitalizedPhrase);
    return capitalizedPhrase;
  });
};

// console.log(titleCased());
