// Insert:
// Add 9 as the last element of the array?
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.push(9);
console.log(arr);

// Add 9 as the first element of the array?
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

arr1.unshift(9);
console.log(arr1);

// insert 9 in index 3?
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

arr3.splice(3, 0, 9);
console.log(arr3);


// Remove:
// Remove last element of the array?
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

arr4.pop();
console.log(arr4);

// Remove first element of the array?
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8];

arr5.shift();
console.log(arr5);

// Remove element in index 3?
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8];

arr6.splice(3, 1);
console.log(arr6);


// Replace:
// Replace index 3 data by 9 & 10?
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

arr7.splice(3, 1, 9,10);
console.log(arr7);