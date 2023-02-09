// challange 1:

// function foo(){
//     console.log ('foo');
//     bar();
// }

// function bar() {
//     console.log("bar");
// }

// foo();


// Challange 2:
// question: write a function called make_avg() which will take an array of integers 
// and the size of that array and return the average of those Values.


function make_avg(intArray, ArrayLength){
    var sum =0;
 for( var i = 0; i<ArrayLength; i++){
     sum += intArray[i];
   

 }
 
 return (sum/ArrayLength);
 

}
var numbers = [10,12,8,10,100];
console.log (make_avg(numbers, numbers.length));


// sadsa
for( let i = 10; i>=1; i--){
    console.log(i);
 }