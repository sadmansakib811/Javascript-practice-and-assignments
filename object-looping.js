var shoppingCart={
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}

// how to find properties values using for loop:


//this line is used to find the property names from the object then we will use the for loop.
const keys = Object.keys(shoppingCart);

for(var i = 0; i<keys.length; i++){
    var propertiesNames = keys[i];
    var propertiesValues = shoppingCart[propertiesNames];
    console.log(propertiesValues);
}

// for in loop to find out the properties name of an object:

for(var propertiesNames1 in shoppingCart){
// we can add this below single line to find the values only from the properties of an object:
    const value1 = shoppingCart[propertiesNames1];
    // using the below print command we can find the properties names only;
    console.log(propertiesNames1);
    console.log(value1);
}