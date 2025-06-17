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
const asideCuotas = document.getElementById('asideCuotas')

const mains = [mainHome, mainCarrito, mainSearch, mainDescripcion]

iconoSearch.addEventListener('click', () => mostrarMain('Search', mains))
comprarYa.addEventListener('click', () => mostrarMain('Carrito', mains))
inicio.addEventListener('click', () => mostrarMain('Home', mains))

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
}

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
        <div class="main__aside--reseñas__stars">${reseña.estrellas}</div>
            <div class="main__aside--reseñas__title">${reseña.titulo}</div>
                <div class="main__aside--reseñas__body">${reseña.reseña}</div>
                <div class="main__aside--reseñas__footer">
                <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                <div class="main__aside--reseñas__reviewer-info">
                <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
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
          <div>
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

// Descripcion
// carrusel de imagenes de producto y su seleccion
const images = document.querySelectorAll('.objeto__article-div-div-img')
const arrow = document.getElementById('arrow')

arrow.addEventListener('mousedown', () => {
  arrow.style.backgroundColor = '#F1F3F5'
})

arrow.addEventListener('mouseup', () => {
  arrow.style.backgroundColor = '#003366'
})

arrow.addEventListener('mouseleave', () => {
  arrow.style.backgroundColor = '#003366'
})

images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(i => i.classList.remove('selected'))
    img.classList.add('selected')
  })
})

function scrollCarousel () {
  const container = document.getElementById('carousel')
  container.scrollBy({ left: 150, behavior: 'smooth' })
}

scrollCarousel()
// fin js carry de producto

const btn = document.getElementById('next-btn')
const container = document.getElementById('product-container')

btn.addEventListener('mousedown', () => {
  btn.style.backgroundColor = '#FFFFFF'
})

btn.addEventListener('mouseup', () => {
  btn.style.backgroundColor = '#005b96'
})

btn.addEventListener('mouseleave', () => {
  btn.style.backgroundColor = '#005b96'
})

btn.addEventListener('click', () => {
  const scrollAmount = container.offsetWidth * 0.8
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
})

// Descripcion js barra de cuotas
const slider = document.getElementById('slider')
const cuotasElegidas = document.getElementById('cuotasElegidas')

slider.addEventListener('input', () => {
  cuotasElegidas.textContent = slider.value
})
// fin js barra de cuotas
// Descripcion Eleccion de stock
const button = document.getElementById('dropdown-button')
const menu = document.getElementById('dropdown-menu')
const arrow2 = document.getElementById('dropdown-arrow')
const title = button.querySelector('h2')

button.addEventListener('click', () => {
  console.log('activado')
  menu.classList.toggle('active')
  arrow2.style.transform = menu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)'
  button.style.borderRadius = menu.classList.contains('active') ? '8px 8px 0 0' : '8px'
})

document.querySelectorAll('.main-aside--stock--option').forEach(option => {
  option.addEventListener('click', () => {
    const value = option.getAttribute('data-value')
    if (value === 'stock') {
      title.textContent = 'Comprar todo...'
    } else {
      title.textContent = `Comprar ${value}`
    }
    menu.classList.remove('active')
    arrow2.style.transform = 'rotate(0deg)'
    button.style.borderRadius = '8px'
  })
})

window.addEventListener('click', e => {
  if (!document.querySelector('.comprar').contains(e.target)) {
    menu.classList.remove('active')
    arrow2.style.transform = 'rotate(0deg)'
    button.style.borderRadius = '8px'
  }
})
// fin eleccion de stock

// Descripccion movimiento en el estado movil
const descripcion = document.getElementById('Descripcion')

function vistaMovil () {
  descripcion.innerHTML = `
    <div class="cuotas">
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
                            De 1 a 12 cuotas sin interés
                        </div>
                    </div>
                    <div>
                        <h2>
                            $4.324
                        </h2>
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
                            <h3>
                                Producto disponible 25
                            </h3>
                        </div>
                    </div>
                    <div class="main-aside--buttons">
                        <button>
                            Agregar al carrito
                        </button>
                        <button onclick="IrAlCarito()">
                            Comprar ahora
                        </button>
                    </div>
    `
}

function vistaEscritorio () {
  descripcion.innerHTML = `
    <div>
                            <h2>
                                Descripcion del producto
                            </h2>
                        </div>
                        <div class="objeto__descrip--descrip">
                            <div class="objeto__descrip--descrip-div">
                                <p>
                                    Características técnicas<br>
                                    ● Capacidad de lavado: 8 kg<br>
                                    ● Tipo de carga: Frontal<br>
                                    ● Velocidad de centrifugado: 1200 RPM<br>
                                    ● Programas de lavado: 15 (Rápido, Eco, Ropa delicada, Lana, Antialérgico, etc.)<br>
                                    ● Tecnología de lavado: EcoWash con control automático de agua<br>
                                    ● Nivel de ruido: 59 dB (lavado) / 76 dB (centrifugado)<br>
                                    ● Eficiencia energética: A+++<br>
                                    ● Funciones especiales: Bloqueo infantil, inicio diferido (hasta 24 hs), protección contra sobrecarga<br>
                                    ● Pantalla: Display LED táctil
                                </p>
                            </div>
                            <div class="objeto__descrip--descrip-div">
                                <p>
                                    El Lavarropas Automático de Carga Frontal 8 Kg está diseñado para brindarte eficiencia, practicidad y un lavado superior en cada uso.<br> 
                                    Su capacidad de 8 kilos lo hace ideal para familias medianas, y gracias a su clasificación energética A+++, cuida tanto el ambiente como tu factura de luz.<br> 
                                    Con un moderno display LED táctil, podrás elegir entre 15 programas de lavado según tus necesidades: desde ciclos rápidos hasta opciones delicadas y antialérgicas. Además, cuenta con funciones inteligentes como inicio diferido y bloqueo infantil, para que tengas el control total del lavado en cualquier momento del día.
                                </p>
                            </div>
                        </div>
    `
}
// fin de paso a movil

// verificacion de tamaño de la pantalla
function verificarTamañoPantalla () {
  if (window.innerWidth < 951) {
    vistaMovil()
  } else {
    vistaEscritorio()
  }
}

// Ejecutar al cargar la página
verificarTamañoPantalla()

// Ejecutar al cambiar el tamaño de la ventana
window.addEventListener('resize', verificarTamañoPantalla)

button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1
  image1.src = Vuelta1 ? imageUp : imageDown
})

function toggleMenu () {
  const mobileMenu = document.querySelector('.mobile-menu')
  mobileMenu.classList.toggle('open')
}

toggleMenu()
