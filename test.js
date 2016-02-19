var stdio = require('./')

var stderr = stdio.stderr()
var stdout = stdio.stdout()

console.log('hi hi')
console.error('some error!!!')
console.error('some error 2')

console.error('stderr', stderr())
console.log('stdout', stdout())
