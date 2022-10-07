// simple use cases of if else and switch statements.

let firstNum = 25;
let secondNum = 10;
let thirdNum = 62.7;

// we have to pass a parameter into the if statement cos it works with boolean values.
if(firstNum > secondNum){
    console.log('25 is greater than 10!!!');
}

// the statement inside the if block will only be executed if parameter is TRUE.


if(firstNum > secondNum && firstNum > thirdNum){
    console.log("25 is the greatest number.");
}
else if(secondNum > thirdNum){
    console.log('10 is the greatest number');
}
else{
    console.log('62.5 is the greatest number.');
}



// for a given value find if num is even or odd.
var prime = 36.58;

if(prime%2 === 0){
    console.log('This number is even.');
}
else{
    console.log('This number is odd.');
}

//switch statement implementing traffic rules

let colorOfLight = 'red';

switch(colorOfLight){
    case 'green':
        console.log('You can drive!');
        break;
    case 'yellow':
        console.log('Please get ready!');
        break;
    case 'red':
        console.log('Please stop!!!');
        break;
    default:
        console.log('The color of the light is not available.');
}

//Determine source of income based on age.
var myAge = 20;

if(myAge > 65){
    console.log('You will get income from your pension.');
}
else if(myAge >= 18 && myAge < 65){
    console.log('You will have to get a job to earn a salary.');
}
else if(myAge < 18){
     console.log('You will receive a monthly allowance.');
}
else{
    console.log('Please enter a number');
}


//Determine your evening routine based on the day of the week.
var dayOfTheWeek = 'Saturday';

switch(dayOfTheWeek){
    case 'Monday':
        console.log('Go to the gym');
        break;
    case 'Tuesday':
        console.log('Visit Mama Dodo Pikin House.');
        break;
    case 'Wednesday':
        console.log('Eat beans and spag.');
        break;
    case 'Thursday':
        console.log('Eat beans and dodo.');
        break;
    case 'Friday':
        console.log('See Pastor Yilu');
        break;
    case 'Saturday':
        console.log('Go to 355 Restaurant with Jessica.');
        break;
    case 'Sunday':
        console.log('Go to church.');
        break;
    default:
        console.log('You have entered an invalid day of the week.');
}