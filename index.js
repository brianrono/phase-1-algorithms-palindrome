function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    // check if the character at index i matches the character at the corresponding index counting backwards from the end
    if (word[i] !== word[word.length - 1 - i]) {
      return false; // not a palindrome if they don't match
    }
  }
  return true; // if we get through the whole loop without finding a mismatch, it's a palindrome
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
We start by looping over the characters in the string, using for (let i = 0; i < word.length / 2; i++). 
We only need to loop through the first half of the string, since we're comparing each character to 
its corresponding character counting backwards from the end of the string.
Inside the loop, we check whether the character at index i matches the character at the corresponding index 
counting backwards from the end. We do this using if (word[i] !== word[word.length - 1 - i]). 
If the characters don't match, we know it's not a palindrome, so we return false.
If we get through the whole loop without finding a mismatch, we know it's a palindrome, so we return true.
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
