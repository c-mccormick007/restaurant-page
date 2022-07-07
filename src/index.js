console.log('index.js connected.')

import { populatePageMain } from "./pageLoad.js";
import { populatePageContact } from "./pageLoadContact.js";
import { populatePageMenu } from "./pageLoadMenu.js";
import { removeContent } from "./pageFunctions.js";

let buttonMain = document.getElementById('main');
let buttonContact = document.getElementById('contact');
let buttonMenu = document.getElementById('menu');

buttonMain.addEventListener('click',() => {
    removeContent();
    populatePageMain();
});

buttonMenu.addEventListener('click',() => {
    removeContent();
    populatePageMenu();
});

buttonContact.addEventListener('click',() => {
    removeContent();
    populatePageContact();
});

populatePageMain();