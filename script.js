/* Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument */
const calculateDifference = (num1, num2) => {
  return num1 - num2;
};

console.log(calculateDifference(10, 5));
console.log(calculateDifference(5, 3));

/* Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not */
const isOdd = (num) => {
  return num % 2 !== 0;
};

console.log(isOdd(5));
console.log(isOdd(6));

/* Write a function named findMin that takes an array of numbers and returns the smallest number in the array. */
function findMin(arr) {
  // The spread operator ...arr is used to pass the array elements as individual arguments to Math.min().
  return Math.min(...arr);
}

console.log(findMin([1, 2, 3, 4, 5]));
console.log(findMin([10, 20, 30, 40, 50]));

/* Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. */
function filterEvenNumbers(arr) {
  let evenNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }

  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterEvenNumbers([4, 6, 8, 10, 12, 14]));

/* Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order. */
function sortArrayDescending(arr) {
  //This function sorts an array in descending order using the built-in sort() method with a custom comparator.
  return arr.sort((a, b) => b - a); // The comparator function correctly subtracts a from b to achieve descending order.
}

console.log(sortArrayDescending([1, 2, 3, 4, 5, 6]));
console.log(sortArrayDescending([10, 20, 30, 40, 50, 60]));
console.log(sortArrayDescending([70, 80, 90, 100]));

/* Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased. */
function lowercaseFirstLetter(str) {
  return str.toLowerCase(); //This function converts the first letter of a string to lowercase using the toLowerCase() method.
}

console.log(lowercaseFirstLetter("Hello World"));
console.log(lowercaseFirstLetter("Ostad"));
console.log(lowercaseFirstLetter("Assigment Two"));

/* Write a function named countVowels that takes a string and returns the number of vowels */
function countVowels(sentance) {
  const vowles = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  // This function accurately counts vowels in a string using a loop and an array of vowels.
  const letters = Array.from(sentance);
  //The forEach method is used to iterate over the characters in the string.
  letters.forEach(function (value, index, array) {
    if (vowles.includes(value)) {
      counter++;
    }
  });

  return counter;
}

console.log(
  countVowels(
    "Hi everyone. my name is rohan. iam a student as well as fonrtend developer"
  )
);

console.log(countVowels("Assigment Two"));

/* Write a function named findAverage that takes an array of numbers and returns the average of all elements. */
function findAverage(arr) {
  // This function calculates the average of an array of numbers correctly, including handling empty arrays.
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  // The loop iterates over the array elements to sum them, and the average is calculated by dividing the sum by the array length.
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(findAverage([1, 2, 3, 4, 5]));
console.log(findAverage([1, 2, 3, 4, 5, 6]));
