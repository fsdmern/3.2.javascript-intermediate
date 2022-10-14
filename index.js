//8a. Arrays
document.write('<h3>8a. Arrays</h3>');
//index value -> starts with 0
document.write('<p><strong>Array Declaration</strong></p>');
let array1 = ['Ramu', 'Mandeep', 'Saloni'];
document.write('Value of array: ' + array1 + '<br/>');
document.write('<p><strong>Add more items to array</strong></p>');
array1[3] = 'Isvitha';
array1[4] = 'Adiel';
array1[5] = 25000;
document.write('Value of array: ' + array1 + '<br/>');

document.write(
  '<p><strong>Array declation with let testArray = "new Array()"</strong></p>'
);
let testArray = new Array();
testArray[0] = 'Apple';
testArray[1] = 'Umbrella';
testArray[2] = 'Zebra';
testArray[3] = 'Cat';
let len = testArray.length;

document.write('Value of array: ' + testArray + '<br/>');

//8b. Arrays - Methods
document.write('<h3>8b. Array Methods</h3>');

document.write('<p><strong>LENGTH:</strong></p>');
document.write('Length of array: ' + testArray.length + '<br/>');

document.write('<p><strong>SORT</strong></p>');
document.write('Sort of the array: ' + testArray.sort() + '<br/>');

document.write('<p><strong>REVERSE</strong></p>');
document.write('Sort - Reverse of the array: ' + testArray.reverse() + '<br/>');

document.write('<p><strong>POP - Removes last item of array</strong></p>');
document.write('Value of array before pop: ' + testArray + '<br/>');
document.write('Popped Item: ' + testArray.pop() + '<br/>');
document.write('Value of array after pop: ' + testArray + '<br/>');

document.write(
  '<p><strong>PUSH - Adds new item into the array towards the end</strong></p>'
);
document.write('Push - A new item: ' + testArray.push('Elephant') + '<br/>');
document.write('Display Array: ' + testArray + '<br/>');

document.write(
  '<p><strong>UNSHIFT - Add new item to the beginning of array </strong></p>'
);
let arrayUnshift = [1, 2, 3];
document.write('Display Array befote unshift: ' + arrayUnshift + '<br/>');
arrayUnshift.unshift(0);
document.write(
  'Display Array after array.unshift(0): ' + arrayUnshift + '<br/>'
);
arrayUnshift.unshift(-1, -2);
document.write(
  'Display Array after array.unshift(-1,-2): ' + arrayUnshift + '<br/>'
);

//splice(start,delteCount, newitem1, newitem2, newitem3..)
document.write(
  '<p><strong>SPLICE - (add items to any part of array)</strong></p>'
);
document.write(
  '<p><strong>splice(start,delteCount, newitem1, newitem2, newitem3..)</strong></p>'
);
let monthArray = ['Jan', 'Mar', 'Apr', 'Jun'];
document.write('Display Array: ' + monthArray + '<br/>');

document.write('<p><strong>Add Feb to array</strong></p>');
document.write(
  'Display Spliced Array: ' + monthArray.splice(1, 0, 'Feb') + '<br/>'
);
document.write('Display Array: ' + monthArray + '<br/>');

document.write(
  '<p><strong>Add May, Jul, Aug after 4th Index to array</strong></p>'
);
document.write(
  'Display Spliced Array: ' +
    monthArray.splice(4, 1, 'May', 'Jul', 'Aug') +
    '<br/>'
);
document.write('Display Spliced Array: ' + monthArray + '<br/>');

const arr = ['a', 'b', 'd'];
document.write('Display Alphabet Array: ' + arr + '<br/>');

arr.splice(2, 0, 'c');
document.write('Display Spliced Array: ' + arr + '<br/>');

//Slice
document.write(
  '<p><strong>SLICE: (start,end) (returns part of array)</strong></p>'
);
document.write(
  '<p><strong>slice(start,end) START: includes the value in the specified index, END: excludes the value in the specified index</strong></p>'
);
const games = [
  'running',
  'jogging',
  'football',
  'swimming',
  'badminton',
  'basketball',
  'volleyball',
];
document.write('Display games Array: ' + games + '<br/>');
document.write(
  'Display sliced animal games animals.slice(2): ' + games.slice(2) + '<br/>'
);
document.write(
  'Display sliced games array games.slice(2,4): ' + games.slice(2, 4) + '<br/>'
);
document.write(
  'Display sliced games array games.slice(3,6): ' + games.slice(3, 6) + '<br/>'
);
document.write(
  'Display sliced games array games.slice(-2): ' + games.slice(-2) + '<br/>'
);

document.write(
  'Display sliced games array games.slice(2,-1): ' +
    games.slice(2, -1) +
    '<br/>'
);

//Loops
document.write('<h3>9. Loops</h3>');

//For
document.write('<p><strong>9a. For Loop</strong></p>');
let myMonths = ['Jan', 'Mar', 'Apr', 'Jun'];
document.write('Length: ' + myMonths + '<br/>');
document.write('Length: ' + myMonths.length + '<br/>');
document.write('<p><strong>Loop and Print months from Array</strong></p>');
for (i = 0; i < myMonths.length; i++) {
  document.write('For Loop - This is month - ' + myMonths[i] + '<br />');
}

//While Loop
document.write('<p><strong>9b. While Loop</strong></p>');
document.write('<p><strong>Simple While Loop</strong></p>');
let text = '';
let n = 0;
while (n < 10) {
  text += 'The number is ' + n + '<br />';
  n++;
}
document.write(text);

document.write('<p><strong>Print Fibonacci Series</strong></p>');
var i = 0,
  j = 1,
  k;
while (i < 30) {
  document.write('Current Number is: ' + i + '<br />');
  k = i + j;
  i = j;
  j = k;
}

//Do While
document.write('<p><strong>9c. Do While Loop</strong></p>');
let dwtext = '';
let m = 12;

do {
  dwtext += '<br>The number is ' + m;
  m++;
} while (m <= 25);
document.write(dwtext);

//SWITCH
document.write('<p><strong>SWITCH Statement</strong></p>');

//Example: 1
// let day = prompt('Enter current day of the week in number format (1-7)');
// switch (day) {
//   case '':
//     alert('Value not entered');
//     break;
//   case '1':
//     alert('Today is Sunday');
//     break;
//   case '2':
//     alert('Today is Monday');
//     break;
//   case '3':
//     alert('Today is Tuesday');
//     break;
//   default:
//     alert('Not a valid value');
// }

//Example: 2
// let day = prompt('Enter current day of the week in number format (1-7)');
// switch (day) {
//   case '1':
//   case '2':
//   case '3':
//     alert('These are valid days of the week');
//     break;
//   default:
//     alert('Not a valid value');
// }

//Functions
document.write('<p><strong>Functions</strong></p>');
function welcomeAll() {
  // alert("Good Morning Everyone!!!")
  document.write('Good Morning Everyone!!!');
}

welcomeAll();

function welcomePerson(name) {
  document.write('<br />' + 'Hello ' + name + '!!!');
}

welcomePerson('Saloni');
welcomePerson('Mandeep');
welcomePerson('Isvita');

function areaCircle(radius) {
  document.write(
    '<br />' +
      'Area of circle with a radius ' +
      radius +
      ' is : ' +
      (22 / 7) * radius * radius
  );
}

areaCircle(5);

function periCircle(radius) {
  document.write(
    '<br />' +
      'Perimeter of circle with a radius ' +
      radius +
      ' is : ' +
      2 * (22 / 7) * radius
  );
}

periCircle(5);

//Example 3
// let n1 = prompt('Enter the value of n');
// n1 = parseInt(n1);

// let i = 0;
// while (i < n1) {
//   document.write(i);
//   i++;
// }

//Square, Rectangle, Triangle, Trapezium, Parallelogram
//Try use loops in function: I will pass a number.
//Print upto that number including hat number

//Function Expressions
document.write('<p><strong>Function Expressions</strong></p>');
//Nornal Function - created in the beginning
//Can call the function before it is declared
// sum(45, 12);

// function sum(a, b) {
//   let result = a + b;
//   console.log(result);
//   document.write('<br>' + 'Sum of Two Numbers is: ' + result);
// }

//Function Expression
//USE: Can be created/made visible based on satisfying some condition
//This is created when execution reaches that particular block
//Can't call the function before it is declared
let add = function (a, b) {
  let result = a + b;
  console.log(result);
};
add(20, 33);

let subt = function (a, b) {
  let result = a - b;
  console.log(result);
};

let a,
  b = (25, 30);
if (a > b) {
  let add = function (a, b) {
    let result = a + b;
    console.log(result);
  };
} else {
  let subt = function (a, b) {
    let result = a - b;
    console.log(result);
  };
}

//Another Example for Function Expression
// let age = prompt('Enter your Age', 0);

// if (age < 18) {
//   let welcome = function () {
//     alert('You are a Minor!');
//   };
//   welcome();
// } else {
//   let welcome = function () {
//     alert('You are a Major!');
//   };
//   welcome();
// }

// if (age < 18) {
//   welcome();
//   function welcome() {
//     alert('You are a Minor!');
//   }
// } else {
//   welcome();
//   function welcome() {
//     alert('You are a Major!');
//   }
// }

//use strict mode
document.write('<p><strong>use strict mode</strong></p>');
//In the beginning of the JS file we can declare the above statement
//After ES2016 JS internally enables the use strict and hence explicit declaration not required

//Arrow Functions
document.write('<p><strong>Arrow Functions</strong></p>');
//left hand side: variable declaration
//Right hand side: Arrow function
//(a,b) => passing the variable
//a+b => desired computation part or expression
let sum = (a, b) => a + b; //+, -, *,/,%, **
//alert(sum(37, 19));

//Can keep/remove brackets if you are passing only one variable
let bonus = (sal) => sal * 0.2;
//alert('Your bonus is:' + bonus(50000));

//No variable getting passed. Only returning some message
let hello = () => 'This is just a message from Arrow function';
// alert(hello());

//Multiline Arrow functions : We need to use curly braces
let mySum = (m, n) => {
  let result = m + n;
  document.write('<br>' + 'Sum of m+n is: ' + result);
};

mySum(5, 9);

//Another example of Arrow function
// let poll = (question, yes, no) => (confirm(question) ? yes() : no());
// poll(
//   'Do you want breakfast?',
//   () => alert('I want'),
//   () => alert('I dont want')
// );

//Objects
document.write('<p><strong>Objects</strong></p>');
let sampleObject = {firstName: '', lastName: ''};
let user = new Object();
user = {name: 'Saloni', age: 25};
document.write(user);
document.write(
  '<br>' + 'User Name: ' + user.name + ' ' + 'User Age: ' + user.age
);
user.isAdmin = true;
user.isGraduate = true;

document.write(
  '<br>' +
    'User Name: ' +
    user.name +
    ' ' +
    'User Age: ' +
    user.age +
    ' ' +
    'Is Admin: ' +
    user.isAdmin +
    ' ' +
    'Is Graduate: ' +
    user.isGraduate
);

document.write(
  '<p><strong>How to access multi word key Ex: "my favourite food"</strong></p>'
);
//How to access multi word key in Object ex: "my favourite food"
let anyUser = {
  name: 'John',
  age: 30,
  'like birds': true,
};
document.write(
  '<p><strong>To access multiword keys, we have to put them in quotes and use square bracket</strong></p>'
);
//To access multiword keys, we have to put them in quotes and use square bracket
// alert('Like birds?: ' + anyUser['like birds']);

document.write(
  '<p><strong>Adding key, Reading Keys, Deleting Keys in Objects</strong></p>'
);
//Adding key, Reading Keys, Deleting Keys
//Add key
anyUser['my favourite food'] = 'Dosa';
//Read key
document.write(
  '<br>' +
    'Reading myfavouritefood key using square brackets: ' +
    anyUser['my favourite food'] +
    '<br>'
);
//Delete key
delete anyUser['like birds'];

//variables starting with number not permitted
//variables can start with $ and _

//Accessing keys via square braces at run time
// let key = prompt('What do you want to know about the user ?', "name");
// alert(user[key]);

//Assign value to an object at run time
// let fruit = prompt('Which fruit do you like ?', 'Mango');
let fruitBasket = {};
fruitBasket.fruit = 10;
// fruitBasket.fruit = 5;
document.write('My Fruits: ' + fruitBasket.fruit);

document.write('<p><strong>Looping of Objects</strong></p>');

//Looping of Objects
let myUser = {
  name: 'ABC User',
  age: 30,
  isAdmin: true,
  isGraduate: true,
};

for (let key in myUser) {
  // alert(key);
  // alert(key + ': ' + myUser[key]);
}

document.write('<p><strong>Ordering of elements in Objects</strong></p>');

let myList = {
  37: 'ABC User',
  22: 30,
  45: true,
  2: true,
};

// for (let xyz in myList) {
//   alert(xyz);
// }

document.write('<p><strong>Object Methods & this word</strong></p>');
//Object methods & this
let xUser = {
  name: 'John',
  age: 30,
};

document.write(
  '<p><strong>Add additional key, value pair or another attribute to the object</strong></p>'
);
//Add additional key, value pair or another attribute to the object
xUser.isAdmin = true;

document.write(
  '<p><strong>When we add function as a propety to the object then it becomes a method</strong></p>'
);
//Add a method to the object.
//When we add function as a propety to the object then it becomes a method
xUser.sayHello = function () {
  // alert('Hello!');
};
xUser.sayHello();

document.write('<p><strong>To print key and value of an object</strong></p>');
//To print key and value of an object
for (let key in xUser) {
  // alert(key + ': ' + xUser[key]);
}

//Shorthand to add a method to user
let yUser = {
  sayHello() {
    // alert('I am a method from yUser Object');
  },
};

yUser.sayHello();
for (let key in yUser) {
  // alert(key + ': ' + yUser[key]);
}

document.write('<p><strong>This key word in object</strong></p>');
//this keyword in javascript
let zUser = {
  name: 'John',
  age: '30',
  printName: function () {
    // alert('I am from zUser printing the name using this: ' + this.name);
  },
};

zUser.printName();
