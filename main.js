"use strict";

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const thirdBook = document.querySelector('.book:nth-child(5) h2 a');
const adv = document.querySelector('.adv');
const inSecondBook = document.querySelectorAll('.book:nth-child(1) ul li');
const inFifthBook = document.querySelectorAll('.book:nth-child(6) ul li');
const inSixthBook = document.querySelectorAll('.book:nth-child(3) ul li');
const sixthBookList = document.querySelector('.book:nth-child(3) ul');

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

thirdBook.innerText = 'Книга 3. this и Прототипы Объектов';

adv.remove();

inSecondBook[4].before(inSecondBook[8]);
inSecondBook[8].before(inSecondBook[6]);
inSecondBook[10].before(inSecondBook[2]);
inFifthBook[4].after(inFifthBook[2]);
inFifthBook[1].after(inFifthBook[9]);
inFifthBook[8].before(inFifthBook[5]);


sixthBookList.insertAdjacentHTML('beforeend', '<li>Глава 8: За пределами ES6</li>');
inSixthBook[9].remove();
sixthBookList.append(inSixthBook[9]);

console.log(inSixthBook[9]);