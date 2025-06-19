// Parte de Thiago

import { Productos } from './Productos.js'

const mainHome = document.getElementById('main__Home')
const mainCarrito = document.getElementById('main__Carrito')
const mainSearch = document.getElementById('main__Search')
const mainDescripcion = document.getElementById('main__Descripcion')
const iconoSearch = document.getElementById('iconoSearch')
const styleTag = document.getElementById('styles')
const productosContainer = document.getElementById('section__div')
const comprarYa = document.getElementById('comprarYa')
const inicio = document.getElementById('inicio')
const reviewCard = document.getElementById('main__aside--reseñas__scroll-box')
const descripcionContainer = document.getElementById('objeto__descrip')
const infoPrincipal = document.getElementById('objeto__article')
const asideCuotas = document.getElementById('cuotasBox')
const iconoCarrito = document.getElementById('carrito')
const publi3 = document.getElementById('main__img')
const carrouselHome = document.getElementById('carrouselHome')
const inicioHeaderMenu = document.getElementById('inicioHeaderMenu')
const carrouselDescripcion = document.getElementById('product-container')

const mains = [mainHome, mainCarrito, mainSearch, mainDescripcion]

iconoSearch.addEventListener('click', () => mostrarMain('Search', mains))
comprarYa.addEventListener('click', () => mostrarMain('Carrito', mains))
inicio.addEventListener('click', () => mostrarMain('Home', mains))
iconoCarrito.addEventListener('click', () => mostrarMain('Carrito', mains))
inicioHeaderMenu.addEventListener('click', () => mostrarMain('Home', mains))

publi3.addEventListener('click', () => {
  publi3.classList.add('eliminar')
})

Productos.forEach(element => {
  const div = document.createElement('div')
  div.classList.add('section__div-div')
  div.innerHTML = `
        <div class="section__div-div-div--fc"><img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" alt="Imagen del producto ${element.id}">
        </div>
        <div class="section__div-div-div">
            <h4>${element.nombre}</h4>
            <label>$${element.precio}</label>
            <p>${element.descripcion}</p>
        </div>`
  div.addEventListener('click', () => {
    mostrarMain('Descripcion', mains)
    descripcionDeUnProducto(element)
  })
  productosContainer.appendChild(div)
})

for (let i = 0; i < mains.length; i++) {
  mains[i].classList.add('none')
}
mains[0].classList.remove('none')

function mostrarMain (mainAMostrar, mains) {
  styleTag.setAttribute('href', `./styles/${mainAMostrar}.css`)
  mains.forEach(element => {
    if (element.id === `main__${mainAMostrar}`) {
      element.classList.remove('none')
    } else {
      element.classList.add('none')
    }
  })
  // if (mainAMostrar === 'Descripcion') {
  //   funcionalidadDeLaDescripcion()
  // }
}

const productosOrdenados = Productos.sort((a, b) => a.stock - b.stock)
const productosDestacados = productosOrdenados.slice(0, 7)

productosDestacados.forEach(element => {
  const div = document.createElement('DIV')
  div.classList.add('producto-card')
  div.innerHTML = `<img
              src="./Fotos/${element.imagenes[0]}${element.id}.jpg"
              alt="Producto">
            <h3>${element.nombre}</h3>
            <p>$${element.precio}</p>
            <p>${element.principalDescripcion}</p>`
  div.addEventListener('click', () => {
    mostrarMain('Descripcion', mains)
    descripcionDeUnProducto(element)
  })
  carrouselHome.appendChild(div)
})

productosDestacados.forEach(element => {
  const div = document.createElement('DIV')
  div.classList.add('destacado__article-div-div-div')
  div.innerHTML = `<img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" alt="Producto">
                <div class="destacado__article-div-div-div-text">${element.nombre}</div>
                <div class="destacado__article-div-div-div-precio">$${element.precio}</div>
                <div class="destacado__article-div-div-div-descr">${element.principalDescripcion}</div>`
  div.addEventListener('click', () => {
    mostrarMain('Descripcion', mains)
    descripcionDeUnProducto(element)
  })
  carrouselDescripcion.appendChild(div)
})

function descripcionDeUnProducto (element) {
  mostrarReviews(element.reseñas)
  mostrarDescripcion(element)
  mostrarInfoPrincipal(element)
  mostrarDetallesDeCompra(element)
}

function mostrarReviews (reseñas) {
  reviewCard.innerHTML = ''
  reseñas.forEach(reseña => {
    const div = document.createElement('div')
    div.classList.add('main__aside--reseñas__card')
    div.innerHTML = `
        <div class="main__aside--reseñas__stars">${reseña.estrellas} Estrellas</div>
            <div class="main__aside--reseñas__title">${reseña.titulo}</div>
                <div class="main__aside--reseñas__body">${reseña.reseña}</div>
                <div class="main__aside--reseñas__footer">
                <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                <div class="main__aside--reseñas__reviewer-info">
                <span class="main__aside--reseñas__reviewer-name">Reviewer ${reseña.usuarioID}</span>
                <span class="main__aside--reseñas__review-date">Date</span>
            </div>
        </div>`
    reviewCard.appendChild(div)
  })
}

function mostrarInfoPrincipal (element) {
  infoPrincipal.innerHTML = `
  <div>
    <h3>${element.nombre}</h3>
  </div>
  <div class="hijo">
    <img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" alt="imagen principal" class="hijoimg">
  </div>
    <div>
        <div class="objeto__article-div-div" id="carousel">
            <img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" class="objeto__article-div-div-img">
            <img src="./Fotos/${element.imagenes[1]}${element.id}.jpg" class="objeto__article-div-div-img">
            <img src="./Fotos/${element.imagenes[2]}${element.id}.jpg" class="objeto__article-div-div-img">
            <img src="./Fotos/${element.imagenes[3]}${element.id}.jpg" class="objeto__article-div-div-img">
            <img src="./Fotos/${element.imagenes[4]}${element.id}.jpg" class="objeto__article-div-div-img">
        </div>
    <div class="objeto__article-div--arrow" id="arrow" onclick="scrollCarousel()"><img src="Fotos/Allado.png" alt="mover"></div>`
}

function mostrarDescripcion (element) {
  descripcionContainer.innerHTML = `
  <div>
    <h2>
        Descripcion del producto
    </h2>
    </div>
    <div id='objeto__descrip--descrip' class="objeto__descrip--descrip">
        <div class="objeto__descrip--descrip-div">
        <p>${element.propiedades}</p>
        </div>
        <div class="objeto__descrip--descrip-div">
        <p>${element.descripcion}</p>
    </div>
  </div>`
}

function mostrarDetallesDeCompra (element) {
  asideCuotas.innerHTML = ''
  const intereses = element.intereses ? 'con' : 'sin'
  const div = document.createElement('div')
  div.classList.add('cuotas')
  div.innerHTML = `
 <div class="cuotas__label">
              <span class="cuotas__texto">Cuotas: <span class="cuotas__numero" id="cuotasElegidas">1</span></span>
              <span class="cuotas__valor">$12</span>
            </div>

            <div class="cuotas__slider-container">
              <div class="cuotas__slider-track"></div>
              <div class="cuotas__fixed-thumb"></div>
              <input type="range" id="slider" class="cuotas__range" min="1" max="12" value="1" step="1">
            </div>
            <div class="cuotas__descripcion">
              De 1 a ${element.cuotas} cuotas ${intereses} interés
            </div>
          </div>
          <div class="cuotas__precio">
            <h2>$${element.precio}</h2>
          </div>
          <div class="main-aside--stock">
            <h2>
              Stock
            </h2>
            <div class="comprar">
              <div class="main-aside--stock--button" id="dropdown-button">
                <h2>Comprar 1</h2>
                <span class="main-aside--stock--arrow" id="dropdown-arrow">
                  <img src="Fotos/abajo.png" alt="expandir">
                </span>
              </div>
              <div class="main-aside--stock--menu" id="dropdown-menu">
                <div class="main-aside--stock--option" data-value="1">Comprar 1</div>
                <div class="main-aside--stock--option" data-value="2">Comprar 2</div>
                <div class="main-aside--stock--option" data-value="3">Comprar 3</div>
                <div class="main-aside--stock--option" data-value="4">Comprar 4</div>
                <div class="main-aside--stock--option" data-value="5">Comprar 5</div>
                <div class="main-aside--stock--option" data-value="6">Comprar 6</div>
                <div class="main-aside--stock--option" data-value="7">Comprar 7</div>
                <div class="main-aside--stock--option" data-value="8">Comprar 8</div>
                <div class="main-aside--stock--option" data-value="9">Comprar 9</div>
                <div class="main-aside--stock--option" data-value="10">Comprar 10</div>
                <div class="main-aside--stock--option" data-value="stock">Todo el stock disponible</div>
              </div>
            </div>
            <div>
              <h3>Productos Disponibles: ${element.stock}</h3>
            </div>
          </div>
          <div class="main-aside--buttons">
            <button>
              Agregar al carrito
            </button>
            <button onclick="IrAlCarito()">
              Comprar ahora
            </button>`
  asideCuotas.appendChild(div)
}

// Parte de ALGUIEN (nose)

// Home

const carousel = document.querySelector('.carousel')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

nextButton.onclick = () => {
  carousel.scrollBy({ left: 625, behavior: 'smooth' })
}

prevButton.onclick = () => {
  carousel.scrollBy({ left: -625, behavior: 'smooth' })
}

const button1Mobile = document.getElementById('Cate-mobile')
const image1Mobile = document.getElementById('buttonImg1-mobile')
const button2Mobile = document.getElementById('Produc-mobile')
const image2Mobile = document.getElementById('buttonImg2-mobile')

let Vuelta1Mobile = false
let Vuelta2Mobile = false

button1Mobile.addEventListener('click', () => {
  Vuelta1Mobile = !Vuelta1Mobile
  image1Mobile.src = Vuelta1Mobile ? 'Fotos/contraer.png' : 'Fotos/expandir.png'
})

button2Mobile.addEventListener('click', () => {
  Vuelta2Mobile = !Vuelta2Mobile
  image2Mobile.src = Vuelta2Mobile ? 'Fotos/contraer.png' : 'Fotos/expandir.png'
})

// header esto sirve para dar vuelta el simbolo de expancio de categorias,etc
const button1 = document.getElementById('Cate')
const image1 = document.getElementById('buttonImg1')
const button2 = document.getElementById('Produc')
const image2 = document.getElementById('buttonImg2')

let Vuelta1 = false
let Vuelta2 = false

button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1
  image1.src = Vuelta1 ? 'Fotos/contraer.png' : 'Fotos/expandir.png'
})

button2.addEventListener('click', () => {
  Vuelta2 = !Vuelta2
  image2.src = Vuelta2 ? 'Fotos/contraer.png' : 'Fotos/expandir.png'
})
button2.addEventListener('click', () => {
  Vuelta2 = !Vuelta2
  image2.src = Vuelta2 ? imageUp : imageDown
})
// fin js header

const imageDown = './Fotos/expandir.png'
const imageUp = './Fotos/contraer.png'

button1Mobile.addEventListener('click', () => {
  Vuelta1Mobile = !Vuelta1Mobile
  image1Mobile.src = Vuelta1Mobile ? 'imagenes/contraer.png' : 'imagenes/expandir.png'
})

button2Mobile.addEventListener('click', () => {
  Vuelta2Mobile = !Vuelta2Mobile
  image2Mobile.src = Vuelta2Mobile ? 'imagenes/contraer.png' : 'imagenes/expandir.png'
})

button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1
  image1.src = Vuelta1 ? imageUp : imageDown
})

document.addEventListener('DOMContentLoaded', () => {
  const closeMenu = document.querySelector('.close-menu')
  const hamburguerMenu = document.querySelector('.hamburger-menu')

  closeMenu.addEventListener('click', () => toggleMenu())
  hamburguerMenu.addEventListener('click', () => toggleMenu())

  function toggleMenu () {
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('open')
  }
})
