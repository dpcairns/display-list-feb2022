// IMPORT MODULES under test here:
import { capitalize } from '../utils.js';

const test = QUnit.test;

test('shold take in a string and return the same string with the first letter capitalized', (expect) => {
    const expected = 'Ukelele';

    const actual = capitalize('ukelele');

    expect.equal(actual, expected);
});
