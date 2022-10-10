//For loop for counting from 1-20

for(i = 1; i <= 20; i++){
    console.log(i);
}

//Nested Loops implementation

for(j = 1; j <= 2; j++){
    console.log("Asurf");
    for(k = 1; k <=2; k++)
        console.log("Drone and Friend");
}

// it will first implement the inner loop before moving to the outer loop for completion.

//for loop task

for(m = 40; m > 0; m-- ){
    console.log(m);
}
console.log("Bomb Defused. You Lost this round.");


/*Every loop has its drawback and advantage.
for loop is prefered when you know the starting and ending point.
while loop is prefered when you only know the condition but not ending point.
*/

//Printing all even numbers from 1-100

for(num = 1; num <=100; num++ ){
    if (num % 2 === 0){
        console.log(num);
    }
}



//Task one
for(i = 1; i <= 3; i++){
    if(i === 1){
        console.log('Gold Medal');
    }
    else if(i === 2){
        console.log('Silver Medal');
    }
    else
        console.log('Bronze Medal');
}

//implementing the above task with switch statements.

for(i = 1; i<= 3; i++){
    switch(i){
        case 1:
            console.log('Gold Medal')
            break;
        case 2:
            console.log('Silver Medal')
            break;
        default :
            console.log('Bronze Medal');        
    }
}