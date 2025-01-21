import {formatCurrancy} from '../scripts/utils/money.js';

describe('test suite: formatCurrancy', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrancy(2095)).toEqual('20.95');
  });

  it('works with zero',() => {
    expect(formatCurrancy(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrancy(2000.5)).toEqual('20.01');
  })
});