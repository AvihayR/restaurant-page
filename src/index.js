//Imports:
import './style.css';
import header from './header.js';
import homePage from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';
import footerElement from './footer.js';
import remove from './remove.js';

header();
homePage();
// menu();
// contact();
footerElement();

//Query selectors for Tabs:
const homeTab = document.getElementById('home-tab');
const menuTab = document.getElementById('menu-tab');
const contactTab = document.getElementById('contact-tab');

//Add EventListeners:
homeTab.addEventListener('click', () => {
  remove();
  homePage();
});

menuTab.addEventListener('click', () => {
  remove();
  menu();
});

contactTab.addEventListener('click', () => {
  remove();
  contact();
});
