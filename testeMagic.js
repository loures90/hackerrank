// Magic square
// formar uma matriz 3x3 com somas de caracteres das linhas e colunas =15, devolver a soma dos módulos
// dos valores somados e subtraídos para se chegar no quadrado mágico

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

// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    const magic = [[8, 1, 6, 3, 5, 7, 4, 9, 2], [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 3, 8, 9, 5, 1, 2, 7, 6], [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [2, 9, 4, 7, 5, 3, 6, 1, 8], [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4], [8, 3, 4, 1, 5, 9, 6, 7, 2]]


    let changes = []
    let arr = []
    s.map(line=>{
        line.map(x=>{
            arr.push(x)
        })
    })
    
    magic.map(magicList=>{
        let val =0 
        for( let index = 0; index < 9 ;index++){
            
            if(arr[index] !== magicList[index]){
                val += arr[index] > magicList[index] ? arr[index] - magicList[index] : magicList[index] - arr[index] 
            }
        }
        changes.push(val)
    })

    console.log(changes)
    let menor = Infinity
    changes.map(num=>{
        if(num< menor){
            menor =num
        }
    })
    return menor

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
