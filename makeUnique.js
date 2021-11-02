// Write your solution below:
// Make Unique String
// Difficulty
// Medium

// Concepts
// Loops, Conditionals, String Methods


// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu


// Solution 1:
function makeUnique(str) {
    let uniqueStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueStr.includes(str[i])) {
        continue
      } else {
        uniqueStr += str[i]
      }
    }
    return uniqueStr
  }
  
  // Solution 2:
  function makeUnique(str) {
    let strSet = new Set(str.split(""))
    return [...strSet].join("")
  }