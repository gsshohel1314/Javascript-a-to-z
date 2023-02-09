// What is Array Traversing?
// একটি array এর শুরু থেকে শেষ পর্যন্ত প্রতিটি element touch বা চালনা করাকেই array traversing বলে।

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// উপরের array এর প্রতিটি eliment এর সাথে 2 যোগ করে print কর?
for( let k = 0; k < arr.length; k++) {
    arr[k] = arr[k] + 2;
}
console.log(arr);

// calculate sum an array all element?
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let j = 0; j < arr2.length; j++) {
    sum = sum + arr2[j];
}
console.log(sum);

// filter even number among an array?
for(let m = 0; m < arr2.length; m++) {
    if(arr2[m] % 2 == 0) {
        console.log(arr2[m]);
    }
}

// filter odd number total among an array?
let total = 0;
for(let m = 0; m < arr2.length; m++) {
    if(arr2[m] % 2 == 1) {
        total += arr2[m];
    }
}
console.log(total);