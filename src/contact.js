import phoneImg from './img/contacts.svg';
import homeImg from './img/home.svg';
import tinderImg from './img/tinder.svg';
import emberImg from './img/ember.jpg';

export default function contact() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentHeader = document.createElement('div');
  const contentMain = document.createElement('div');

  const contactUl = document.createElement('ul');
  const contactLi1 = document.createElement('li');
  const contactLi2 = document.createElement('li');
  const contactLi3 = document.createElement('li');

  const imgMain = document.createElement('img');
  const homeLogo = document.createElement('img');
  const tinderLogo = document.createElement('img');
  const phoneLogo = document.createElement('img');

  const homeAddress = document.createElement('p');
  const tinderLink = document.createElement('a');
  const phoneNumber = document.createElement('p');

  const h2Header = document.createElement('h2');
  const pHeader = document.createElement('p');

  //add element ids and classes:
  contentHeader.id = 'content-header';
  contentMain.id = 'content-main';
  imgMain.classList.add('cover-img');
  homeLogo.classList.add('logo');
  tinderLogo.classList.add('logo');
  phoneLogo.classList.add('logo');
  h2Header.id = 'contact-header';
  pHeader.id = 'contact-p';
  tinderLink.setAttribute('href', 'https://github.com/AvihayR/restaurant-page');
  contactUl.id = 'contact-ul';
  contactLi1.classList.add('contact-li');
  contactLi2.classList.add('contact-li');
  contactLi3.classList.add('contact-li');

  //Elements content:
  imgMain.src = emberImg;
  homeLogo.src = homeImg;
  tinderLogo.src = tinderImg;
  phoneLogo.src = phoneImg;

  h2Header.innerText = 'Contact us';
  pHeader.innerText = `
  Visit our family Shop & Restaurant, at Element City.

  Other ways to contact us:
  
  `;

  homeAddress.innerText = 'Element City, Firetown, 1200 Park eve.';
  tinderLink.innerText = 'Firebook';
  phoneNumber.innerText = '+999-00-111-22-33';

  //Add created elements to contentDiv:
  contentHeader.appendChild(h2Header);
  contentHeader.appendChild(pHeader);

  contactLi1.appendChild(homeLogo);
  contactLi1.appendChild(homeAddress);
  contactLi2.appendChild(phoneLogo);
  contactLi2.appendChild(phoneNumber);
  contactLi3.appendChild(tinderLogo);
  contactLi3.appendChild(tinderLink);

  contactUl.appendChild(contactLi1);
  contactUl.appendChild(contactLi2);
  contactUl.appendChild(contactLi3);

  contentHeader.appendChild(contactUl);
  contentMain.appendChild(imgMain);

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentMain);
}
