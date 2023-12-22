//  programs in anonymous function & IIFE

// 1. Print odd numbers in an array 

//ITFE
(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);



//Anonymus function 
const printOddNumbers = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);




// Arrow function 
const printOddNumbersArrow = arr => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbersArrow([1, 2, 3, 4, 5, 6, 7, 8, 9]);



// Convert all the strings to title caps in a string array: