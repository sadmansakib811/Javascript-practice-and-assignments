/* =======================Problem 1: Let’s play a mind game================= */ 
// this function will take a number and it will first check if the input is a number or other type of variable then it will multiply the number with 3 and after that it will add 10 with that number and after
//adding it will divide the number by 2 and after that it will substract the division variable with 5.
function mindGame(number){
//this if function is used to check if the given inputs type is number type or not.
    if(typeof number != 'number'){
        return('Error. You can only put numbers as an Input');
}
else{
     //below line will check if the input number is negative or not if its negative number it will automatically make it positive using math.abs function.
let postiveNumber =Math.abs(number);
let multiplication = (postiveNumber*3);
let sum = multiplication+10;
let division = sum/2;
let total = division-5
return(total);
    
}
}


/* ====================Problem 1 Ends Here============= */

