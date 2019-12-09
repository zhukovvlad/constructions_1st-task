import numberOrNot from '../basic';

test.each([
  ['good', '15', 15],
  ['also good', 15, 15],
  ['bad', 'foo', 'Error: Error in type of input foo'],
])(
  ('this case is %s'),
  (possibility, amount, expected) => {
    const result = numberOrNot(amount);

    expect(result).toBe(expected);
  },
);
