// Create a function that takes numbers 1 - 10 and console logs them. Use a for loop.

function looping() {
    let randomNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i = 0; i < randomNum.length; i++) {
      console.log(randomNum[i])
    }
  }
looping()

// Using a while loop, return an array that contains all odd numbers between 3 and 103
let num = 3
let arr = []
while (num < 104) {
  num += 1
  if (num % 2 != 0) {
    arr.push(num)
  }
}
console.log(arr)

//  arraySum(num) receives an array of numbers as an argument and returns the sum of all numbers,  for example: arraySum([1, 2, 3, 4, 5, 6]) => 21, use any loop. 

function listSum(num) {
  let total = 0;
  for (i = 0; i < num.length; i++) {
    total += num[i]
  }
  return total
}
console.log(listSum([1, 2, 3, 4, 5, 6]))



// Use a loop to display the numbers 9 to 0 in descending order.

function decresingLoop(){
  let myList = [1,2,3,4,5,6,7,8,9]
  for(let i = myList.length - 1; i >= 0; i--){
    console.log(myList[i])
  }
}
decresingLoop()
  
// Write a function computing the factorial of n
function factorial(n){
  if(n == 0 || n == 1){
      return 1;
  } 
  else{
      return n * factorial(n-1);
  }
}

console.log(factorial(4))
  
// Write a function using a for loop that returns the sum of all numbers from 1 to n. 

function sums(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum+=i;
  }
  return sum;
}
console.log(sums(5));

// Using any loop, Given a string change t=the every second letter to an uppercase ‘Z’. Assume there are no spaces.
// Let string = “donuts”
// Expected output => dZnZtZ

function letterZ(myString) {
  let strArr = [];
  let newString = " "
  for(let i = 0; i < myString.length; i++) {
    if (i % 2 === 0 + 1) {
      strArr.push("z");
    }
    else {
      strArr.push(myString[i])
    }
  }
  return (strArr.toString().replace(/,/g, ''))
}
console.log(letterZ("donuts"));