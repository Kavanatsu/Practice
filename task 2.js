const string = "hello alexandr!";
const words = string.split(" ");
const replacedWords = [];

for (let i = 0; i < words.length; i++) {
	const word = words[i];
	const firstLetter = word[0];
	const replacedWord = firstLetter.repeat(word.length);
	replacedWords.push(replacedWord);
}

const replacedString = replacedWords.join(" ");
console.log(replacedString);