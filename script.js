'use strict';
 
// Работа с  DOM

const booksCollection = document.querySelectorAll('.books');

const book = document.querySelectorAll('.book');


book[0].remove();

book[1].remove();

book[2].remove();

book[3].remove();

book[4].remove();

book[5].remove();

booksCollection[0].append(book[1]); // 1book

booksCollection[0].append(book[0]); // 2book

booksCollection[0].append(book[4]); // 3book

booksCollection[0].append(book[3]); // 4book

booksCollection[0].append(book[5]); // 5book

booksCollection[0].append(book[2]); // 6book

console.log(booksCollection);

console.log(book);

const bg = document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const reklam = document.querySelector('.adv').replaceWith();

const tagsSecondBook = book[0].getElementsByTagName("li");

tagsSecondBook[9].after(tagsSecondBook[2]);

tagsSecondBook[3].before(tagsSecondBook[5]);

tagsSecondBook[3].after(tagsSecondBook[7]);


const tagsFiveBook = book[5].getElementsByTagName("li");

tagsFiveBook[5].after(tagsFiveBook[2]);

tagsFiveBook[1].after(tagsFiveBook[9]);

tagsFiveBook[8].after(tagsFiveBook[5]);


const tag8 = book[2].getElementsByTagName("li");

const newElem = document.createElement("li");

newElem.textContent = 'Глава 8: За пределами ES6';

tag8[8].append(newElem);