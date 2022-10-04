//Arrays
document.write('<h3>8a. Arrays</h3>');
//index value -> starts with 0
document.write('<p><strong>Array Declaration</strong></p>');
let array1 = ['Ramu', 'Mandeep', 'Saloni'];
document.write('Value of array: ' + array1 + '<br/>');
document.write('<p><strong>Add more items to array</strong></p>');
array1[3] = 'Isvitha';
array1[4] = 'Adiel';
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

//Arrays - Methods
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
