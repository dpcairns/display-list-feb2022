import { capitalize } from './utils.js';

export function renderFruitEl(fruit) {
//     <div class="fruit" style="background: yellow">
//     <h3>Banana</h3>
//     <img src="assets/banana.png" />
//     <p>Wholesale price: 4</p>
//     <p>Your price: 5</p>
//     <p>a delicious tropical fruit</p>
// </div>
    const fruitEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const imgEl = document.createElement('img');
    const wholesalePriceEl = document.createElement('p');
    const yourPriceEl = document.createElement('p');
    const descriptionEl = document.createElement('p');

    fruitEl.classList.add('fruit');
    fruitEl.style.background = fruit.color;

    nameEl.textContent = capitalize(fruit.name);
    imgEl.src = `assets/${fruit.name}.png`;
    wholesalePriceEl.textContent = `Wholesale price: ${fruit.cost}`;
    yourPriceEl.textContent = `Your price: ${fruit.sellFor}`;
    descriptionEl.textContent = fruit.description;

    fruitEl.append(nameEl, imgEl, wholesalePriceEl, yourPriceEl, descriptionEl);
    
    return fruitEl;
}