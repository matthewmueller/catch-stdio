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

function stdout() {
  var ret = '';

  process.stdout.write = (function(write){
    return function(str, enc, fd) {
      ret += str;
    };
  })(old_stdout);

  return function restore() {
    process.stdout.write = old_stdout;
    return ret.replace(/\n$/, '');
  }
}

/**
 * Monkey-patch `stderr`
 */

function stderr() {
  var ret = '';

  process.stderr.write = (function(write){
    return function(str, enc, fd) {
      ret += str;
    };
  })(old_stderr);

  return function restore() {
    process.stderr.write = old_stderr;
    return ret.replace(/\n$/, '');
  }
}
