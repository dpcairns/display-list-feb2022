// IMPORT MODULES under test here:
import { renderFruitEl } from '../render-fruit.js';

const test = QUnit.test;

const banana = {
    name: 'banana',
    cost: 4,
    sellFor: 5,
    color: 'yellow',
    description: 'a delicious tropical fruit'
};

test('should take in a fruit and return the right DOM element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="fruit" style="background: yellow;"><h3>Banana</h3><img src="assets/banana.png"><p>Wholesale price: 4</p><p>Your price: 5</p><p>a delicious tropical fruit</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFruitEl(banana);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
