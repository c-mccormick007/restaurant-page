console.log('index.js connected.')

import './style.css';

import { populatePageMain } from "./pageLoad.js";
import { populatePageContact } from "./pageLoadContact.js";
import { populatePageMenu, unloadMenu } from "./pageLoadMenu.js";
import { removeContent } from "./pageFunctions.js";

let buttonMain = document.getElementById('main');
let buttonContact = document.getElementById('contact');
let buttonMenu = document.getElementById('menu');

buttonMain.addEventListener('click',() => {
    removeContent();
    populatePageMain();
    unloadMenu();
});

buttonMenu.addEventListener('click',() => {
    unloadMenu();
    removeContent();
    populatePageMenu();
});

buttonContact.addEventListener('click',() => {
    removeContent();
    populatePageContact();
    unloadMenu();
});

populatePageMain();