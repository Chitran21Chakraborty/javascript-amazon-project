import {formatCurrancy} from '../scripts/utils/money.js';
console.log('Test suite : formatCurrancy');


//basic test-cases

console.log('converts cents into dollars');

if (formatCurrancy(2095) === '20.95') {
  console.log('passed 1');
} else {
  console.log('failed 1')
}


//edge cases(if there are any)

console.log('works with zero');
if (formatCurrancy(0) === '0.00') {
  console.log('passed 2');
} else {
  console.log('failed 2');
}


console.log('rounds up to the nearest cent');

if (formatCurrancy(2000.5) === '20.01') {
  console.log('passed 3');
} else {
  console.log('failed 3');
}

console.log('rounds up to the nearest cent');

if (formatCurrancy(2000.4) === '20.00') {
  console.log('passed 4');
} else {
  console.log('failed 4');
}