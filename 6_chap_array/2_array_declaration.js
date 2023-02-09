// There are two way Array declare:
// 1. Literal way
// 2. Constructor way


// 1. Literal way
let arr = [1, 'Shohel', 3, 4, 5];
console.log(arr);

// spacific value print
console.log(arr[0]);
console.log(arr[2]);

// new value add a spacific index
arr[5] = 6;
arr[10] = 11;
console.log(arr);
console.log(arr[7]);

// update a spacific index vlaue
arr[1] = 'Raihan';
console.log(arr);
console.log('Index 2 value replace by: ' + arr[2]);


// 2. Constructor way
let arr2 = Array(1, 'Nasim', 2, 3);
console.log(arr2);
