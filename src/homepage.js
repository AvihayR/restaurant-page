import restImg from './img/rest-1.jpg';
export default function homePage() {
  //Fetch content element:
  const contentDiv = document.getElementById('content');

  //Create elements:
  let contentHeader = document.createElement('div');
  contentHeader.id = 'content-header';

  const h1Header = document.createElement('h1');
  const pHeader = document.createElement('p');
  const imgHeader = document.createElement('img');
  imgHeader.classList.add('cover-img');

  //Elements content:
  h1Header.innerText = 'The Fireplace';
  pHeader.innerText = 'Wood Snacks - Lava Java - Kol-Nuts';
  imgHeader.src = restImg;

  //Add created elements to contentDiv:
  contentHeader.appendChild(h1Header);
  contentHeader.appendChild(pHeader);
  contentHeader.appendChild(imgHeader);

  contentDiv.appendChild(contentHeader);
}
