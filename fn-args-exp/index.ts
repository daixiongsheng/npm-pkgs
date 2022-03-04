import fnArgs from 'fn-args';

const f1 = function (name, age) {};
function f2(a, b, c) {}
const f3 = (d, e, f) => {};
const f4 = async (g, h) => {};
const f5 = function* (i, j) {};

console.log(fnArgs(f1));
console.log(fnArgs(f2));
console.log(fnArgs(f3));
console.log(fnArgs(f4));
console.log(fnArgs(f5));
