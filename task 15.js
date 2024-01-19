class MyString {
  reverse(str) {
    return str.split('').reverse().join('');
  }

  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

const myString = new MyString();
console.log(myString.reverse("hello world"));
console.log(myString.ucFirst("hello world"));
console.log(myString.ucWords("hello world")); 