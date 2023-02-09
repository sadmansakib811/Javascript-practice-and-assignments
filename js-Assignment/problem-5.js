/* =======Problem 5: Convert your gems into diamond=========== */

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