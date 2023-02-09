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
