const os = require('node:os')

console.log('Operating System Information:')
console.log('-------------------')

console.log('Operating System Name:', os.platform())
console.log('Operating System Version:', os.release())
console.log('Architecture:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Free Memory:', os.freemem() / 1024 / 1024)
console.log('Total Memory:', os.totalmem() / 1024 / 1024)
console.log('Uptime (in hours):', os.uptime() / 60 / 60)