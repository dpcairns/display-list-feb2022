//     <div class="book">
//     <h2>Drive Your Plow Over the Bones of the Dead</h2>
//     <p>Published in 2009</p>
//     <p>By Olga Tokarczuk, born 29 January 1962</p>
//     <ul class="keywords">
//         <li>poetry</li>
//         <li>sci-fi</li>
//         <li>biography</li>
//         <li>alternate history</li>
//     </ul>
// </div>

export function renderBookEl(bookObject) {
    const bookEl = document.createElement('div');
    const titleEl = document.createElement('h2');
    const publishedEl = document.createElement('p');
    const authorEl = document.createElement('p');
    const keywordListEl = document.createElement('ul');

    bookEl.classList.add('book');

    titleEl.textContent = bookObject.title;    
    publishedEl.textContent = `Published in ${bookObject.year}`;
    authorEl.textContent = `By ${bookObject.author.name}, born ${bookObject.author.birth}`;

    for (let keyword of bookObject.keywords) {
        // make and append an li
        const keywordEl = document.createElement('li');
        keywordEl.textContent = keyword;

        keywordListEl.append(keywordEl);
    }

    bookEl.append(titleEl, publishedEl, authorEl, keywordListEl);

    return bookEl;
}