var Stream = require('stream').PassThrough
var stdio = require('./')

var se = new Stream()
var so = new Stream()

var stderr = stdio.stderr(se)
// var stdout = stdio.stdout(so)

se.on('data', function(str) {
  console.log(str.toString())
})

// console.log('hi hi')
console.error('some error!!!')
console.error('some error 2')

console.error(stderr())
// console.log('stdout', stdout())


