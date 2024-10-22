const fs = require('node:fs') 

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // if it is a file
    stats.isDirectory(), // if it is a directory
    stats.isSymbolicLink(), // if it is a symbolic link
    stats.size // size in bytes
  )