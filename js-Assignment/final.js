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




    /*====================problem-2, Even odd=================================*/
// this function will check if the given strings length is even or odd.
function evenOdd(ektaString) {
    //this if function is used to check if the given inputs type is String type or not.
    if(typeof ektaString === 'string'){
    // here we are using % to check if there is any remaining or not if the remaining is equal to zero that means its an even number
if(ektaString.length%2 === 0){
    return('even');

}

// here we are using % to check if there is any remaining or not if the remaining is not equal to zero that means its an odd number
else if(ektaString.length%2 != 0){
    return('odd');
    
}
}

else{
    return('You can only put string values');
}
}
/* ====================Problem 2 Ends Here============= */



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


/* =========Problem 4: Finding Bad data =================*/
/* Note: This function loops through the given array and checks if each element is less than zero. 
If it is, it increments the count by 1. Finally, the function returns the count of Bad Data. */
//let age = [12,25,45,78,15,27]
function findingBadData(numberArray) {
    
    if(Array.isArray(numberArray)===true){
      let badword = 0;
        for (let i = 0; i<numberArray.length; i++){
            //let fullArray = numberArray[i];
            
            if (numberArray[i]<=0){
                badword = badword+1;
                
            }  
        }
        return badword;
    }
    
    else{
        return('please input array only');
    }
    }
    
    /* ==========Problem 4 end here============= */

/* =======Problem 5: Convert your gems into diamond=========== */
/*this function is taking 3 inputs from users which are number inputs and then it multiplies the number with 3 given number and then it will add those number and check if
the numbers are less than 2000 or bigger than 2000. if the number is bigger than 2000 then it will substract 2000 from that number and return the result and if the number is less than 2000
then it will show the number without any change*/
function gemsToDiamond(firstFrnd, scndFrnd, thirdFrnd){
    const firstFrGpower = 21;
        const secondFrGpower = 32;
        const thirdFrGpower = 43;
    //this if condtion checks if the user is puting the number inputs or not
    if(typeof firstFrnd == 'number' && typeof scndFrnd ==='number' && typeof thirdFrnd==='number'){
        
        let firstFrndDiamond = firstFrnd*21;
        let secondFrndDiamond = scndFrnd*32;
        let thirdFrndDiamond =  thirdFrnd*43;
        let total = firstFrndDiamond+secondFrndDiamond+thirdFrndDiamond;
        if(total<2000){
            return total;
        }
        else if (total>2000 ){
             return (total-2000);
        }

        
    }
    else{
        return('This is not a Number input. Please input numbers only');
    }
}



console.log(gemsToDiamond(1, 1, 1));


/* ==========Problem 5 end here============= */


    





    
    