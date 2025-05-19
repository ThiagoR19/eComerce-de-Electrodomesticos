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


const productos = document.getElementsByClassName('section__div-div')

for (let i = 0; i < productos.length; i++) {
  productos[i].addEventListener('click', () => {
    window.location.href = "../Descripcion/Descripcion.html";
  })

}