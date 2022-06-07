function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('');
  console.log(reversed);
  return reversed === word;

}
 
/* 
  Add your pseudocode here
  1. Create a function that takes in a word
  2. Create a variable that reverses the word
  3. Check if the reversed word is equal to the original word
  4. Return true if the reversed word is equal to the original word
*/

/*
  Add written explanation of your solution here
  1. We create a function that takes in a word
  2. We create a variable that reverses the word
  3. We check if the reversed word is equal to the original word
  4. We return true if the reversed word is equal to the original word
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
