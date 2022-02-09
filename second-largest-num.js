function get2LargestNum(num) {
    let largDataStore = largDataStore2 = -9999999;
    // input a number greater than 1
    if (num.length < 2) {
        return 'Please input a data greater than 1';
    }
    // get largest number form an array
    for (let i = 0; i < num.length; i++) {
        if (num[i] > largDataStore) {
            largDataStore = num[i];
        }
    }
    // get 2 largest number from an array
    for (let i = 0; i < num.length; i++) {
        if (num[i] > largDataStore2 && num[i] < largDataStore) {
            largDataStore2 = num[i];
        }
    }
    return largDataStore2;
}
let myArray = [3, 29, 10, 28, 60, 26, 51, 43, 76];
let secondLargestNum = get2LargestNum(myArray);

console.log('Here is your second largest number :', secondLargestNum);





