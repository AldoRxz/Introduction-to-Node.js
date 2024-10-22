const fs = require('node:fs')

console.log('Reading the first file...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('first text:', text)

console.log('--> Doing things while reading the file...')

console.log('Reading the second file...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('second text:', secondText)