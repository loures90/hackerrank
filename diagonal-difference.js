// https://www.hackerrank.com/challenges/diagonal-difference/problem

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9 


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let mainDiag = 0
    let diagReverse =0
    let size = arr[0].length-1
    // let arrayteste = []
    arr.map((line, indexA)=>{
        
        
        line.map((num, indexB)=>{
            if(indexA === indexB ){
                mainDiag += num
            }
            if(indexB === size){
                diagReverse += num
                size = indexB -1
            }
            // arrayteste.push(size)
            
        })
    })
    if(mainDiag >= diagReverse){
        return mainDiag - diagReverse
    }else{
        return diagReverse - mainDiag
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
