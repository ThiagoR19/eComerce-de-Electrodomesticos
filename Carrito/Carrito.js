const button1 = document.getElementById('Cate');
const image1 = document.getElementById('buttonImg1');
const button2 = document.getElementById('Produc');
const image2 = document.getElementById('buttonImg2');

const imageDown = './Fotos/expandir.png';
const imageUp = './Fotos/contraer.png';

let Vuelta1 = false;
let Vuelta2 = false
button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1;
  image1.src = Vuelta1 ? imageUp : imageDown;
});
button2.addEventListener('click', () => {
  Vuelta2 = !Vuelta2;
  image2.src = Vuelta2 ? imageUp : imageDown;
});

function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}

const button1Mobile = document.getElementById('Cate-mobile');
const image1Mobile = document.getElementById('buttonImg1-mobile');
const button2Mobile = document.getElementById('Produc-mobile');
const image2Mobile = document.getElementById('buttonImg2-mobile');

let Vuelta1Mobile = false;
let Vuelta2Mobile = false;

button1Mobile.addEventListener('click', () => {
  Vuelta1Mobile = !Vuelta1Mobile;
  image1Mobile.src = Vuelta1Mobile ? 'imagenes/contraer.png' : 'imagenes/expandir.png';
});

button2Mobile.addEventListener('click', () => {
  Vuelta2Mobile = !Vuelta2Mobile;
  image2Mobile.src = Vuelta2Mobile ? 'imagenes/contraer.png' : 'imagenes/expandir.png';
});