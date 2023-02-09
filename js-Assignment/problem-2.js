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
