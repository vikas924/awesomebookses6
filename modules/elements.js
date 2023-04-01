import Books from './Books.js';

export const even = () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const books = new Books(title.value, author.value);
  books.add();
  title.value = '';
  author.value = '';
};

export const showhide = (e) => {
  const list = document.querySelector('#List');
  const add = document.querySelector('#Add-new');
  const contact = document.querySelector('#Contact');
  if ((e.target.id === 'nav1')) {
    list.style.display = 'flex';
    add.style.display = 'none';
    contact.style.display = 'none';
  } else if ((e.target.id === 'nav2')) {
    list.style.display = 'none';
    add.style.display = 'flex';
    contact.style.display = 'none';
  } else if ((e.target.id === 'nav3')) {
    list.style.display = 'none';
    add.style.display = 'none';
    contact.style.display = 'flex';
  }
};