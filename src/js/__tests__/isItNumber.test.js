import isItNumber from '../isItNumber';

test.each([
  ['hex case', 'ffffff', 'Error: Error in type of input ffffff'],
  ['case with float. It is to be Integer.', 16.2, 16],
  ['case with string number', '15', 15],
  ['case with number', 15, 15],
  ['bad case with \'foo\' argument', 'foo', 'Error: Error in type of input foo'],
])(
  ('Let\'s test %s'),
  (possibility, amount, expected) => {
    const result = isItNumber(amount);

    expect(result).toBe(expected);
  },
);
