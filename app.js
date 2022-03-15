import { fruits } from './fruits-data.js';
import { renderFruitEl } from './render-fruit.js';

const fruitListEl = document.querySelector('.fruit-list');

for (let fruit of fruits) {
    const fruitEl = renderFruitEl(fruit);

    fruitListEl.append(fruitEl);
}

import { books } from './book-data.js';
import { renderBookEl } from './render-book.js';

const bookListEl = document.querySelector('.book-list');

for (let book of books) {
    const bookEl = renderBookEl(book);

    bookListEl.append(bookEl);
}



