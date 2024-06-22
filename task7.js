//---------------------------1
// let num = [1,2,3,4,5];
// console.log(num);

// num.map(num =>
// {
//     console.log(num)
// });



//---------------------------2
// let num = [1,2,4,8,16,32,64]
// let x = num.filter(function(number)
// {
//     return number > 10;
// });
// document.write(x);



//---------------------------3
// var namee = ["zaid","ali","yousef"];
// namee.forEach(function(larg) {
//     console.log(larg.toUpperCase())
// });



//---------------------------4
// const car = [
//     { name : "mercedes", model : 2000},{ name : "audi", model : 2020},{ name : "nissan-vtc", model : 2015}
// ];
// const zzz = car.map(function(fun)
// {
// return fun.name;
// });
// console.log(zzz);



//---------------------------5
// const www = [
//     { name: 'Apple', category: 'Fruits'},
//     { name: 'Banana', category: 'Fruits'},
//     { name: 'Carrot', category: 'Vegetables'},
//     { name: 'Broccoli', category: 'Vegetables'},
//     { name: 'Strawberry', category: 'Fruits'}
// ];

// const fruits = www.filter(www => www.category === 'Fruits');
// console.log(fruits);



//---------------------------6
// const num = [1,2,3,4];
// let sum = 5;
// num.forEach(num =>
// {
//     sum +=  num;
// });
// console.log(sum);



//---------------------------7
// const num1 = [1,2,3,4,5];
// num1.map(function(reversed)
// {
//     num1.reverse();
// });
// console.log(num1);



//---------------------------8
// const x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const primeNumbers = x.filter(isPrime);
// function isPrime(num) 
// {
//     if ( num == 3 || num == 2 || num % 2 != 0 && num % 3 != 0 && num > 1) return true;
// };
// console.log(primeNumbers);



//---------------------------9
// const bool = [false, true];

// bool.forEach(function(bool, index) {
//     console.log(`Index ${bool}: ${index}`);
// });



//---------------------------10
// const x = [10,20,30];
// const xr = x.map(Number => Number.toString());
// console.log(xr);



//---------------------------11
// const x = [1,1,2,2,3,4,5,7,7];
// const xr = Array.from(new Set(x));
// console.log(xr);


//---------------------------12
const x = 
[
{a : 1},
{b : 2},
{c : 3}
];
x.forEach(num => 
    {
        console.log(`a: ${person.name}, b: ${person.age}, c: ${person.city}`);
    });