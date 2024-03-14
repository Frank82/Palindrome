// Write a function that takes in string and checks if it is a Palindrome

// A palindrome is a word that is the same forwards and backwards!
// Ex: racecar -> racecar

// Pass in the string to the function

// Looking through the string in reverse

// Reverse the string

// Check the reverse string with the ORIGINAL string and see IF EQUAL, then its a palindrome

// If it is a palindrome, then retrun true

// If it is not a palindrome then return fase

function isPalindrome (string) {
  let reversed = ''
  
  for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i]
  }
  if (reversed == string) {
    return true
  }  else {
    return false
  }
}

console.log(isPalindrome('river'))


//Topics: Strings, loops