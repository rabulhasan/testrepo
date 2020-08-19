var name = 'Hasan';
var age = 33;
var skills = ['javaScript','Java','html'];
var a =4; b=2; c=a+b;
console.log(name);

if (age >= 34 ) {
    console.log('Yes, I can vote!');
} else {
    console.log('No, you are not a voter.');
}

for (let i = 0; i < 10; i++) {
  console.log(c);
    
}
//document.getElementById('demo').innerhtml = 'my first js'; 
if (10 === '10') {
    console.log('true');
} else {
    console.log('false');
}

var parson = {    firstName: 'John', lastName: 'Doe', age: 35 };
var carModle = {carName: 'Tesla', year:2020, price:100000}
console.log(`${parson.firstName} ${parson.lastName} is ${parson.age} years old. He has a ${carModle.carName}, 
which is biuld by ${carModle.year} and its cost ${carModle.price}.`);

function myFunction(p1,p2) {
    return p1*p2;

}
console.log(myFunction(5,6));
