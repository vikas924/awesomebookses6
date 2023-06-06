export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    add = () => {
      const booklist = JSON.parse(localStorage.getItem('array')) || [];
      const value1 = this.title.trim();
      const value2 = this.author.trim();
      if ((value1.length !== 0) && (value2.length !== 0)) {
        booklist.push(this);
        localStorage.setItem('array', JSON.stringify(booklist));
        this.display();
      }
    }
  
  static style = () => {
    const change = document.querySelectorAll('.div');
      for (let i = 0; i < booklist.length; i += 1) {
        if (i % 2 === 0) {
          change[i].classList.add('background');
        }
      }

    display = () => {
      const booklist = JSON.parse(localStorage.getItem('array'));
      const list = document.querySelector('#list');
      const value1 = this.title.trim();
      const value2 = this.author.trim();
      const div = document.createElement('div');
      div.classList.add('div');
      div.innerHTML = `<div class="paradiv" <p>"${value1}" by "${value2}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
      list.appendChild(div);
      for (let i = 0; i < booklist.length; i += 1) {
        const button = document.querySelectorAll('#button');
        button[i].addEventListener('click', Books.remove);
      }
      Books.style();
    }

    static displayall = () => {
      const booklist = JSON.parse(localStorage.getItem('array')) || [];
      const list = document.querySelector('#list');
      for (let i = 0; i < booklist.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('div');
        div.innerHTML = `<div class="paradiv"><p>"${booklist[i].title}" by "${booklist[i].author}"</p></div><div class="buttondiv"><button id="button">Remove</button></div>`;
        list.appendChild(div);
        const button = document.querySelectorAll('#button');
        button[i].addEventListener('click', Books.remove);
      }
      Books.style();
    }

    static remove() {
      const booklist = JSON.parse(localStorage.getItem('array'));
      const parent = document.querySelector('#list');
      const button = document.querySelectorAll('#button');
      const butto = Array.from(button).indexOf(this);
      const reele = this.parentNode.parentNode;
      parent.removeChild(reele);
      booklist.splice(butto, 1);
      Books.style();
      localStorage.setItem('array', JSON.stringify(booklist));
    }
}
