const words = ["дим", "манек", "рота"];
const palindromes = [];

for (let i = 0; i < words.length; i++) {
  const word = words[i];
	let palindrome = word;
	for (let i = word.length - 2; i >= 0; i--) {
    palindrome += word[i];
  }
  palindromes.push(palindrome);
}

console.log(palindromes);