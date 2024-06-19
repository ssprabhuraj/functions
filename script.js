//  programs in anonymous function , IIFE  & arrow function

// a. Print odd numbers in an array 

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
      // console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);



// Arrow function 
const printOddNumbersArrow = arr => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      // console.log(num);
    }
  });
};

printOddNumbersArrow([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/************************************************************************************************************************** */

//b.  Convert all the strings to title caps in a string array:

//ITFE
(function (str) {
  const arr = str.split(',');
  const result = [];
  arr.forEach(function (titleCase) {
    const words = titleCase.split(' ');
    const titleCasedWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');

    // Push the transformed string into the result array
    result.push(titleCasedWords);
  })

  // console.log(result.join(' '));
})("hello woRld ,javaScript,react js,php ")




//Anonymus function 
const convertStringToTitleCase = function (str) {
  const arr = str.split(',');
  const result = [];
  arr.forEach(function (titleCase) {
    const words = titleCase.split(' ');
    const titleCasedWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');

    // Push the transformed string into the result array
    result.push(titleCasedWords);
  })

  // console.log(result.join(' '));
};

convertStringToTitleCase("hello woRld ,javaScript,react js,php ");


// Arrow Function
const convertStringToTitleCaseArrow = (str) => {
  const arr = str.split(',');
  const result = [];
  arr.forEach(function (titleCase) {
    const words = titleCase.split(' ');
    const titleCasedWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ');

    // Push the transformed string into the result array
    result.push(titleCasedWords);
  })

  // console.log(result.join(' '));
};

convertStringToTitleCaseArrow("hello woRld ,javaScript,react js,php ");

/************************************************************************************************************************** */

// c . Sum of all numbers in an array

//ITFE
(function (arr) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  console.log(result);


})([1, 2, 3, 4, 5, 6])

//Anonymus function 
const sumOfAllNumbersInAArray = function (arr) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  console.log(result);
}

sumOfAllNumbersInAArray([1, 2, 3, 4, 5, 6])

// Arrow function 
const sumOfAllNumbersInAArrayArrow = (arr) => {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  console.log(result);
}

sumOfAllNumbersInAArray([1, 2, 3, 4, 5, 6]);

/************************************************************************************************************************** */

// d.Return all the prime numbers in an array


//IIFE 

(function (arr) {
  const primeNumbersIFEE = [];

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; // If divisible, it's not prime
    }
    return true; // If no divisors found, it's prime
  };

  // Loop through each number in the input array
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbersIFEE.push(arr[i]); // Add prime numbers to the result array
    }
  }

  console.log(primeNumbersIFEE); // Output the array of prime numbers

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);





//Anonymus function 
const isPrime = function (num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const getPrimes = function (arr) {

  const primeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbers.push(arr[i]);
    }
  }

  return primeNumbers; // Return the array of prime numbers
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const primeNumbers = getPrimes(arr);

console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 19]



// Arrow Function

//Anonymus function 
const isPrimeArrow = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const getPrimesArrow = (arr) => {

  const primeNumbersArrow = [];

  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      primeNumbersArrow.push(arr[i]);
    }
  }

  return primeNumbersArrow; // Return the array of prime numbers
};

const arrArrow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const primeNumbersArrow = getPrimes(arr);

console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 19]

/************************************************************************************************************************** */

//e.Return all the palindromes in an array

//IIFE

(function (arr) {
  const isPalindrome = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
  };

  // Filter the array to include only palindromes
  const palindromes = arr.filter(isPalindrome);

  // Print the array of palindromes
  console.log(palindromes);
})(["racecar", "hello", "madam", "world", "level", "noon", "openai", "rotor", "javascript"]);


//Anonymus Function
const returnAllPalindromesInAArray = function (arr) {
  const isPalindrome = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
  };

  // Filter the array to include only palindromes
  const palindromes = arr.filter(isPalindrome);

  // Print the array of palindromes
  console.log(palindromes);
}
returnAllPalindromesInAArray(["racecar", "hello", "madam", "world", "level", "noon", "openai", "rotor", "javascript"]);

//Arroe Function
const returnAllPalindromesInAArrayArow = (arr) => {
  const isPalindrome = (str) => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
  };

  // Filter the array to include only palindromes
  const palindromes = arr.filter(isPalindrome);

  // Print the array of palindromes
  console.log(palindromes);
}
returnAllPalindromesInAArray(["racecar", "hello", "madam", "world", "level", "noon", "openai", "rotor", "javascript"]);

/************************************************************************************************************************** */


//IIFE
(function () {
  let uniqueArray = [...new Set(arr)];
  console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]

})([1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 5]);




//anonymous function
const removeDuplicatesAnonymous = function (arr) {
  return [...new Set(arr)];
};

const arrayanonymous = [1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 5];
const uniqueArrayAnonymous = removeDuplicatesAnonymous(arrayanonymous);

console.log(uniqueArrayAnonymous); // Output: [1, 2, 3, 4, 5, 6, 7]


//Arrow function
const removeDuplicatesArrow = (arr) => {
  return [...new Set(arr)];
};

const array = [1, 2, 3, 4, 3, 2, 1, 5, 6, 7, 5];
const uniqueArray = removeDuplicatesArrow(array);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]

/************************************************************************************************************************** */
