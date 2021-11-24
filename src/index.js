
// Babel Input: ES2015 arrow function
const arrowFunction = [1, 2, 3].map(n => this);

// Babel Output: ES5 equivalent
const equivalent = [1, 2, 3].map(function(n) {
  return this;
});

console.log('arrowFunction :', arrowFunction)
console.log('equivalent :', equivalent)
undefined