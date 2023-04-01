import Books from './Books.js';

export const even = () => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const books = new Books(title.value, author.value);
    books.add();
    title.value = '';
    author.value = '';
  }