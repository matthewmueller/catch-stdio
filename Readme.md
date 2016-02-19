
# catch-stdio

  Catch stdio

## Installation

```
npm install catch-stdio
```

## Example

```js
var Stream = require('stream').PassThrough
var stdio = require('catch-stdio')
var stream = Stream()

var stderr = stdio.stderr(stream)

// stream to another source
stream.on('data', function (buf) {
  console.log(buf.toString())
})

console.error('a')
console.error('b')
console.error('c')

// restore stderr and get the buffered response
// in this case "a\nb\nc\n"
var buffered = stderr()
```

## License

MIT
