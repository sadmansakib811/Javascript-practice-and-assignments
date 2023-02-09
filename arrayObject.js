const phone = [
    {brand:'iphone 5', color: 'red', price:23000},
    {brand:'Samsung Z 22', color: 'red', price:55000},
    {brand:'Oppo', color: 'red', price:55000}

]
function findCheapestPhone(phoneArray){
    let cheapestPhone = phoneArray[0];
for (let i =0; i < phoneArray.length; i++ ){
 const phones = phoneArray[i];
 if (phones.price < cheapestPhone.price){
   cheapestPhone = phones;
 }
}
return cheapestPhone;
}

let allphones = findCheapestPhone(phone);
console.log(allphones);