/*Numbers are Data type that represents both integers and decimals.
Logical AND Operator : &&
Logical OR Operator : ||
Logical NOT Operator : !
*/

// '+'operator when used with numbers is addition operation and
// when used with strings, it is called concatenation operation.

console.log(5 + 2);
console.log('Call'+' Of'+' Duty'+' Mobile');
console.log(12 + ' Months');
console.log(365 +' Days');

console.log(5 > 4 > 3);

/*The above line of code is evaluated as follows :
- 5 is greater than 4 which is true
- 4 is greater than 3 which is true
- true is coerced to have the value of '1'
- so we have true > true which translates to 1 > 1 which is false */


//Task 1
var score = 8;
var result = score > 0 && score < 10;
console.log('Mid-level skills:',result);

//Task 2
var timeRemaining = 0.1;
var energy = 10;
var gameOver = timeRemaining == 0 || energy == 0;
console.log('GameOver:',gameOver);

//Task 3: Using modulus operator, %, to test if a number is odd or even.

var num1 = 18;
var num2 = 37;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 != 0;
console.log('Is', num1,'an even number?',result1);
console.log('Is',num2,'an odd number?',result2);

//Task 4: using the += operator and ++ operator.
var counter = 0;
counter += 1;
counter += 3;
counter += 5;
counter += 7;
counter ++;
console.log(counter);


