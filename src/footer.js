import menuImg from './img/menu.png';
import itemsImg from './img/items.png';

export default function footerElement() {
  //Fetch body element:
  const body = document.querySelector('body');

  //Create elements:
  const footerElement = document.createElement('footer');

  const p = document.createElement('p');
  const aIcons = document.createElement('a');
  const aBackground = document.createElement('a');
  const aImages = document.createElement('a');
  const aFonts = document.createElement('a');

  //add element ids and classes:

  //Elements content:
  aIcons.setAttribute('href', 'https://icons8.com/');
  aIcons.textContent = 'Icons by Icons8';

  aBackground.setAttribute('href', 'https://unsplash.com/@gareth_david');
  aBackground.textContent = 'Bricks Background by Gareth David - Unsplash';

  aImages.setAttribute('href', 'https://www.pixar.com/elemental');
  aImages.textContent = 'Images & story by Pixar Studios';

  //Add created elements to contentDiv:
  footerElement.appendChild(aImages);
  footerElement.appendChild(aIcons);
  footerElement.appendChild(aBackground);

  body.appendChild(footerElement);
}
