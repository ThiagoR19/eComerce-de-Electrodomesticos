// Parte de Thiago

// Seleccion de todos los mains en el index.html
const mainHome = document.getElementById('main__Home')
const mainCarrito = document.getElementById('main__Carrito')
const mainSearch = document.getElementById('main__Search')
const mainDescripcion = document.getElementById('main__Descripcion')

// Seleccion de la etiqueta link con id styles
const styleTag = document.getElementById('styles')

let mains = [mainHome,mainCarrito,mainSearch,mainDescripcion]


// Le doy a todos un class none, excepto al home (mainHome[0])
for (let i = 0; i < mains.length; i++) {
  mains[i].classList.add('none')
} 
mains[0].classList.remove('none')

function mostrarMain(mainAMostrar,mains) {
  styleTag.setAttribute('href',`./styles/${mainAMostrar}.css`)
  mains.forEach(element => {
    if(element.id == `main__${mainAMostrar}`) {
      element.classList.remove('none')
    } else {
      element.classList.add('none')
    }
  });
}





// Home

const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let scrollAmount = 0;

nextButton.onclick = () => {
  carousel.scrollBy({ left: 625, behavior: 'smooth' });
};

prevButton.onclick = () => {
  carousel.scrollBy({ left: -625, behavior: 'smooth' });
};




const button1Mobile = document.getElementById('Cate-mobile');
const image1Mobile = document.getElementById('buttonImg1-mobile');
const button2Mobile = document.getElementById('Produc-mobile');
const image2Mobile = document.getElementById('buttonImg2-mobile');

let Vuelta1Mobile = false;
let Vuelta2Mobile = false;

button1Mobile.addEventListener('click', () => {
  Vuelta1Mobile = !Vuelta1Mobile;
  image1Mobile.src = Vuelta1Mobile ? 'Fotos/contraer.png' : 'Fotos/expandir.png';
});

button2Mobile.addEventListener('click', () => {
  Vuelta2Mobile = !Vuelta2Mobile;
  image2Mobile.src = Vuelta2Mobile ? 'Fotos/contraer.png' : 'Fotos/expandir.png';
});


const button1 = document.getElementById('Cate');
const image1 = document.getElementById('buttonImg1');
const button2 = document.getElementById('Produc');
const image2 = document.getElementById('buttonImg2');

let Vuelta1 = false;
let Vuelta2 = false;

button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1;
  image1.src = Vuelta1 ? 'Fotos/contraer.png' : 'Fotos/expandir.png';
});

button2.addEventListener('click', () => {
  Vuelta2 = !Vuelta2;
  image2.src = Vuelta2 ? 'Fotos/contraer.png' : 'Fotos/expandir.png';
});

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

function scrollCarousel() {
  const container = document.getElementById('carousel')
  container.scrollBy({ left: 150, behavior: 'smooth' })
}
const btn = document.getElementById("next-btn")
const container = document.getElementById("product-container")

btn.addEventListener("mousedown", () => {
  btn.style.backgroundColor = "#FFFFFF"
})

btn.addEventListener("mouseup", () => {
  btn.style.backgroundColor = "#005b96"
})

btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "#005b96"
})

btn.addEventListener("click", () => {
  const scrollAmount = container.offsetWidth * 0.8
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  })
})
const slider = document.getElementById('slider')
const cuotasElegidas = document.getElementById('cuotasElegidas')

slider.addEventListener('input', () => {
  cuotasElegidas.textContent = slider.value
})
const button = document.getElementById('dropdown-button')
const menu = document.getElementById('dropdown-menu')
const arrow2 = document.getElementById('dropdown-arrow')
const title = button.querySelector('h2')

button.addEventListener('click', () => {
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

var aside = document.getElementById("aside")
var descripcion = document.getElementById("Descripcion")

function vistaMovil() {
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
  aside.innerHTML = `
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
                    <div class="main__aside--reseñas">
                        <div class="main__aside--reseñas__container">
                            <h2 class="main__aside--reseñas__titulo">Reseñas</h2>
                            <div class="main__aside--reseñas__scroll-box">

                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
}

function vistaEscritorio() {
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
  aside.innerHTML = `
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
                    <div class="main__aside--reseñas">
                        <div class="main__aside--reseñas__container">
                            <h2 class="main__aside--reseñas__titulo">Reseñas</h2>
                            <div class="main__aside--reseñas__scroll-box">

                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="main__aside--reseñas__card">
                                    <div class="main__aside--reseñas__stars">☆ ☆ ☆ ☆ ☆</div>
                                    <div class="main__aside--reseñas__title">Review title</div>
                                    <div class="main__aside--reseñas__body">Review body</div>
                                    <div class="main__aside--reseñas__footer">
                                        <img src="https://i.pravatar.cc/30?img=1" alt="avatar">
                                        <div class="main__aside--reseñas__reviewer-info">
                                            <span class="main__aside--reseñas__reviewer-name">Reviewer name</span>
                                            <span class="main__aside--reseñas__review-date">Date</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `
}

function verificarTamañoPantalla() {
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

function IrAlCarito() {
  window.location.href = "../Carrito/Carrito.html"
}

button1.addEventListener('click', () => {
  Vuelta1 = !Vuelta1
  image1.src = Vuelta1 ? imageUp : imageDown
})
button2.addEventListener('click', () => {
  Vuelta2 = !Vuelta2
  image2.src = Vuelta2 ? imageUp : imageDown
})

const productos = document.getElementsByClassName('section__div-div')

for (let i = 0; i < productos.length; i++) {
  productos[i].addEventListener('click', () => {
    window.location.href = "../Descripcion/Descripcion.html";
  })
}

function toggleMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('open');
}