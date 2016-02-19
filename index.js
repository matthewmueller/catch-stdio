/**
 * Module Dependencies
 */

var old_stdout = process.stdout.write;
var old_stderr = process.stderr.write;

/**
 * Export catchers
 */

module.exports = {
  stdout: stdout,
  stderr: stderr
}

/**
 * Monkey-patch `stdout`
 */

function stdout (stream) {
  var ret = '';

  process.stdout.write = (function(write){
    return function(str, enc, fd) {
      stream && stream.write(str.replace(/\n$/, ''))
      ret += str;
    };
  })(old_stdout);

  return function restore() {
    process.stdout.write = old_stdout;
    stream && stream.end()
    return ret;
  }
}

/**
 * Monkey-patch `stderr`
 */

function stderr(stream) {
  var ret = '';

  process.stderr.write = (function(write){
    return function(str, enc, fd) {
      stream && stream.write(str.replace(/\n$/, ''))
      ret += str;
    };
  })(old_stderr);

  return function restore() {
    process.stderr.write = old_stderr;
    stream && stream.end()
    return ret.replace(/\n$/, '');
  }
}
