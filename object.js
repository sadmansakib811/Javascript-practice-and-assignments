// object
var student = {
    id: 115,
    name: 'sadman sakib',
    class: 09,
    roll: 03

}
console.log(student);

var mobile = {
    brand: 'Apple',
    storage:'64 gb',
    price: 12500,
    camera: '45 mp'

}
// to find all the values from an object:
console.log(mobile);
// To find all the name of the properties in a object:

var properties1 = Object.keys(mobile);
console.log(properties1);


// To find properties values
var propertiesValue = Object.values(mobile);
console.log(propertiesValue);
// when u know the property name and to get the value u have to do this:
console.log (mobile.brand);
// another system
// when u know the property name and to get the value u have to do this:

var mobileKeyValue = mobile.price;
console.log(mobileKeyValue);

// another system
// when u know the property name and to get the value u have to do this:

var propertyName3 ='camera';
var propertyvalue3= mobile[propertyName3];
console.log(propertyvalue3);

// another system
// when u know the property name and to get the value u have to do this:
var mobileKeyValue2 = mobile['price'];
console.log(mobileKeyValue2);


// set properties value:

mobile.price=180000;
console.log(mobile);

// 2nd way of set properties value:
mobile['price']= 195000;
console.log('updated price'+' '+ mobile.price);

// 3rd way of set or change properties value:
var mobilePrice = 'price';
mobile[mobilePrice] = 90000;
console.log('discount price:'+' '+mobile.price);