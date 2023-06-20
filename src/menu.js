import menuImg from './img/menu.png';
import itemsImg from './img/items.png';

export default function menu() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  const contentMain = document.createElement('div');

  const h1Main = document.createElement('h1');
  const pMain = document.createElement('p');
  const imgMain = document.createElement('img');
  const imgMain1 = document.createElement('img');

  //add element ids and classes:
  contentMain.id = 'content-main';
  imgMain.classList.add('menu-img');
  imgMain1.classList.add('menu-img');
  pMain.id = 'main-p';
  h1Main.id = 'h1-menu';

  //Elements content:
  h1Main.innerText = 'Menu';
  pMain.innerText = `
  Our menu might not fit every element out there,
  But as long as you're not made out of tears,
  or name is not Wade Ripple (!), 
  You should be fine!
  `;
  imgMain.src = menuImg;
  imgMain1.src = itemsImg;

  //Add created elements to contentDiv:
  contentMain.appendChild(h1Main);
  contentMain.appendChild(pMain);
  contentMain.appendChild(imgMain);
  contentMain.appendChild(imgMain1);

  contentDiv.appendChild(contentMain);
}
