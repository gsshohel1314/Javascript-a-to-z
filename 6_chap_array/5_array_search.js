// Search an spacific Element and print that index number?
let arr = [4, 10, 5, 1, 3, 9, 55, 20, 21, 88];

let searchData = 9;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] == searchData) {
        console.log('Data found in index: ' + i);
        isFound = true;
    }
}

if (!isFound) {
    console.log('Data not found');
}