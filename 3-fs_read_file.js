const fs = require('node:fs')

console.log('Reading the first file...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <---- execute this callback
  console.log('first text:', text)
})

console.log('--> Doing things while reading the file...')

console.log('Reading the second file...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('second text:', text)
})