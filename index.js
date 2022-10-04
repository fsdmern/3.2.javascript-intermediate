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

document.write('<p><strong>Array Length</strong></p>');
document.write('Length of array: ' + testArray.length + '<br/>');

document.write('<p><strong>Array Sort</strong></p>');
document.write('Sort of the array: ' + testArray.sort() + '<br/>');

document.write('<p><strong>Array Reverse</strong></p>');
document.write('Sort - Reverse of the array: ' + testArray.reverse() + '<br/>');

document.write(
  '<p><strong>Array Pop - Removes last item of array</strong></p>'
);
document.write('Value of array before pop: ' + testArray + '<br/>');
document.write('Popped Item: ' + testArray.pop() + '<br/>');
document.write('Value of array after pop: ' + testArray + '<br/>');

document.write('Push - A new item: ' + testArray.push('Elephant') + '<br/>');
document.write('Display Array: ' + testArray + '<br/>');

//splice(start,delteCount)
//splice(start,indextoadd,'newitem')
document.write('<p><strong>Array splice (add items to array)</strong></p>');
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
document.write('<p><strong>Print Fibonacci Series</strong></p>');
var i = 0,
  j = 1,
  k;
while (i < 30) {
  document.write('While Loop ' + i + '<br />');
  k = i + j;
  i = j;
  j = k;
}
