// Minimum swap
// You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
//  You are allowed to swap any two elements.
//  You need to find the minimum number of swaps required to sort the array in ascending order.


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {

    let count = 0
    for(let index = 0 ;  index< arr.length ;index++){
        console.log(index)
        let val = 0
        if(arr[index] !== index+1){
            count +=1
            console.log( ' entrei index: ',index, arr)

            val = arr.indexOf(index+1)
            console.log('valor do índice: ',val)
            
            let y =  arr[index]

            arr[index] =  arr[val]

            arr[val] = y
            // arr[arr[index] - 1] = y
            
            
            
        }
    }
    return count
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
