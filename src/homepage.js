import restImg from './img/rest-1.jpg';
import fluidImg from './img/fluid-1.png';

export default function homePage() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentHeader = document.createElement('div');
  const contentMain = document.createElement('div');

  const h1Header = document.createElement('h1');
  const pHeader = document.createElement('p');
  const imgHeader = document.createElement('img');

  const h2Main = document.createElement('h2');
  const pMain = document.createElement('p');
  const imgMain = document.createElement('img');

  //add element ids and classes:
  contentHeader.id = 'content-header';
  contentMain.id = 'content-main';
  imgHeader.classList.add('cover-img');
  imgMain.classList.add('cover-img');
  h2Main.id = 'main-h2';
  pMain.id = 'main-p';

  //Elements content:
  h1Header.innerText = 'The Fireplace';
  pHeader.innerText = 'Wood Snacks - Lava Java - Kol-Nuts';
  imgHeader.src = restImg;
  h2Main.innerText = 'Welcome to the Fireplace!';
  pMain.innerText = `A family traditional Shop & Restaurant built by Bernie Lumen, 
  Bernie left Fire land to provide a better life for his lovely wife, Cinder
  And his sole daughter, Ember, who will one day, take his place and own the shop!
  In our shop, you could find yummy treats,
  Hot coffee, flaming groceries, Or Baby-flames essentials!`;
  imgMain.src = fluidImg;

  //Add created elements to contentDiv:
  contentHeader.appendChild(h1Header);
  contentHeader.appendChild(pHeader);
  contentHeader.appendChild(imgHeader);

  contentMain.appendChild(h2Main);
  contentMain.appendChild(pMain);
  contentMain.appendChild(imgMain);

  contentDiv.appendChild(contentHeader);
  contentDiv.appendChild(contentMain);
}
