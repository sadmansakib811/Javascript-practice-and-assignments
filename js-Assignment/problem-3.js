
/* ==========Problem 3============= */
/* Note: You need to find the difference between the input value and 7 and if the difference is less than 7 then return the 
result of the subtraction. Otherwise, return double the input value. In other words, return the
 double of the number you have taken as input. */

function isLGSeven(number){
    //this if function is used to check if the given inputs type is number type or not.
    if(typeof number != 'number'){
        return('Error. You can only put numbers as an Input');
}
else{
    //if the number is less than 7 the if condition will be true and it will substract the given number by 7 and will return the result.
if (number<7)
    {
        const result = number-7;
        return result;
    }
    else{
        //if the number is bigger than 7 it will return the double value of the given number by multiplying it with 2.
        return (number*2);
    }
}
}

/* ==========Problem 3 end here============= */

