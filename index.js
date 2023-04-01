import Books from './modules/Books.js';

import {even} from './modules/addbooks.js';

import { DateTime } from './modules/date.js'

import { showhide } from './modules/showhidesection.js'

Books.displayall();

document.querySelector('.add').addEventListener('click', even);

const timeDate = document.querySelector('.date');
 
const dateAndTime = () => {
    setInterval(() => {
      const date = (`${DateTime.now().toLocaleString(DateTime.DATETIME_MED)}`);
      timeDate.innerHTML = date;
    }, 0);
  };

dateAndTime();

const link = document.querySelectorAll('.navli');
for (let i = 0; i <= link.length - 1; i += 1) {
  link[i].addEventListener('click', showhide);
}
