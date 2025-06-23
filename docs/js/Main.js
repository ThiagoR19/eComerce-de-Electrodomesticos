import { funcionalidadHeader } from './header.js'
import { Productos } from './Productos.js'

const mainHome = document.getElementById('main__Home')
const mainCarrito = document.getElementById('main__Carrito')
const mainSearch = document.getElementById('main__Search')
const mainDescripcion = document.getElementById('main__Descripcion')
const styleTag = document.getElementById('styles')
const productosContainer = document.getElementById('section__div')
const inicio = document.getElementById('inicio')
const reviewCard = document.getElementById('main__aside--reseñas__scroll-box')
const descripcionContainer = document.getElementById('objeto__descrip')
const infoPrincipal = document.getElementById('objeto__article')
const asideCuotas = document.getElementById('cuotasBox')
const iconoCarrito = document.getElementById('carrito')
const publi3 = document.getElementById('main__img')
const inicioHeaderMenu = document.getElementById('inicioHeaderMenu')
const banner = document.getElementById('banner')
const carrouselHome = document.getElementById('carrouselHome')
const carrouselDescripcion = document.getElementById('product-container')

export const mains = [mainHome, mainCarrito, mainSearch, mainDescripcion]

inicio.addEventListener('click', () => mostrarMain('Home', mains))
iconoCarrito.addEventListener('click', () => mostrarMain('Carrito', mains))
inicioHeaderMenu.addEventListener('click', () => mostrarMain('Home', mains))

publi3.addEventListener('click', () => {
  publi3.classList.add('eliminar')
})

const carrito = []
let value = 1

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

export function mostrarMain(mainAMostrar, mains) {
  styleTag.setAttribute('href', `./styles/${mainAMostrar}.css`)
  mains.forEach(element => {
    if (element.id === `main__${mainAMostrar}`) {
      element.classList.remove('none')
    } else {
      element.classList.add('none')
    }
  })
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (mainAMostrar === 'Carrito') {
    mostrarCarrito()
  }
  if (mainAMostrar === `Search`) {
    mostrarSearch()
  }
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

const productosConMasStock = Productos.sort((a, b) => b.stock - a.stock)
const productoConMasStock = productosConMasStock.slice(0, 1)

mostarHome(productoConMasStock[0])

function mostarHome(element) {
  const div1 = document.createElement('div')
  div1.classList.add('banner-text')
  const div2 = document.createElement('div')
  div2.classList.add('banner-image')

  div1.innerHTML = `
    <h1>${element.nombre}</h1>
    <p>${element.principalDescripcion}</p>
    <button id='comprarYa'>COMPRA YÁ</button>`
  div2.innerHTML = `<img src="./Fotos/${element.imagenes[1]}${element.id}.jpg" alt="${element.nombre}">`
  banner.appendChild(div1)
  banner.appendChild(div2)

  const comprarYa = document.getElementById('comprarYa')
  comprarYa.addEventListener('click', () => {
    mostrarMain('Descripcion', mains)
    descripcionDeUnProducto(element)
  })
}

function descripcionDeUnProducto(element) {
  mostrarReviews(element.reseñas)
  mostrarDescripcion(element)
  mostrarInfoPrincipal(element)
  mostrarDetallesDeCompra(element)
}

function mostrarReviews(reseñas) {
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

function mostrarInfoPrincipal(element) {
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
    <div class="objeto__article-div--arrow" id="arrow" onclick="scrollCarousel()"><img src="./Fotos/Allado.png" alt="mover"></div>`
  const fotosCarrousel = document.querySelectorAll('.objeto__article-div-div-img')
  fotosCarrousel.forEach(imagen => {
    imagen.addEventListener('click', () => {
      const urlImagen = imagen.getAttribute('src')
      infoPrincipal.querySelector('.hijo img').setAttribute('src', urlImagen)
    })
  })
}

function mostrarDescripcion(element) {
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

function mostrarDetallesDeCompra(element) {
  asideCuotas.innerHTML = ''
  const intereses = element.intereses ? 'con' : 'sin'
  const div = document.createElement('div')
  div.classList.add('cuotas')
  div.innerHTML = `
 <div class="cuotas__label">
              <span class="cuotas__texto">Cuotas: <span class="cuotas__numero" id="cuotasElegidas">1</span></span>
              <span class="cuotas__valor">${element.cuotas}</span>
            </div>

            <div class="cuotas__slider-container">
              <div class="cuotas__slider-track"></div>
              <div class="cuotas__fixed-thumb"></div>
              <input type="range" id="slider" class="cuotas__range" min="1" max="${element.cuotas}" value="1" step="1">
            </div>
            <div class="cuotas__descripcion">
              De 1 a ${element.cuotas} cuotas ${intereses} interés
            </div>
          </div>
          <div class="cuotas__precio">
            <h2 id="precio">$${element.precio}</h2>
          </div>
          <div class="main-aside--stock">
            <h2>
              Stock
            </h2>
            <div class="comprar">
              <div class="main-aside--stock--button" id="dropdown-button">
                <h2>Comprar 1</h2>
                <span class="main-aside--stock--arrow" id="dropdown-arrow">
                  <img src="./Fotos/abajo.png" alt="expandir">
                </span>
              </div>
              <div class="main-aside--stock--menu" id="dropdown-menu">
              </div>
            </div>
            <div>
              <h3>Productos Disponibles: ${element.stock}</h3>
            </div>
          </div>
          <div class="main-aside--buttons">
            <button id="agrego">
              Agregar al carrito
            </button>
            <button id="ComprarAhora">
              Comprar ahora
            </button>`

  asideCuotas.appendChild(div)
  const pre = document.getElementById("precio")

  // codigo para actualizar las cuotas elegidas
  const slide = document.getElementById('slider')
  const elegidas = document.getElementById('cuotasElegidas')
  slide.addEventListener('input', () => {
    elegidas.innerText = slide.value
  })
  // fin de codigo de cuotas

  // codigo para menu desplegable de stock
  const button = document.getElementById('dropdown-button')
  const menu = document.getElementById('dropdown-menu')
  const arrow2 = document.getElementById('dropdown-arrow')
  const title = button.querySelector('h2')
  // codigo para aparecer el menu de stock y dar vuelta la felchita
  button.addEventListener('click', () => {
    menu.classList.toggle('active')
    arrow2.style.transform = menu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)'
    button.style.borderRadius = menu.classList.contains('active') ? '8px 8px 0 0' : '8px'
  })
  // creacion de elementos del menu comprar
  let añadir = ''
  for (let i = 1; i < (element.stock + 1); i++) {
    if (i === element.stock) {
      añadir += `<div class="main-aside--stock--option" data-value="${i}">Comprar todo el stock disponible</div>`
    } else {
      añadir += `<div class="main-aside--stock--option" data-value="${i}">Comprar ${i}</div>`
    }
  }
  menu.innerHTML = añadir
  // fin del codgio para elementos del menu comprar

  // asignacion de compra a boton
  document.querySelectorAll('.main-aside--stock--option').forEach(option => {
    option.addEventListener('click', () => {
      value = option.getAttribute('data-value')
      if (value === element.stock) {
        title.textContent = 'Comprar todo...'
      } else {
        title.textContent = `Comprar ${value}`
      }
      menu.classList.remove('active')
      arrow2.style.transform = 'rotate(0deg)'
      button.style.borderRadius = '8px'
      const pre = document.getElementById("precio")
      pre.innerText = `$${value * element.precio}`
    })
  })
  // fin de codigo para

  // eventos para la compra
  const agrego = document.getElementById('agrego')
  const ComprarAhora = document.getElementById('ComprarAhora')
  value = 1
  agrego.addEventListener('click', () => aComprar(element, value))
  ComprarAhora.addEventListener('click', () => aComprar(element, value))
  ComprarAhora.addEventListener('click', () => mostrarMain('Carrito', mains))

  // fin de eventos para la compra de productos
}

function mostrarCarrito() {
  const lista = document.getElementById('listaProduc');
  lista.innerHTML = '<h1>Todos los productos</h1>';

  carrito.forEach((item, index) => {
    const id = item.eleme.id;
    // insertAdjacentHTML añade directamente y no refresca todo el DOM como el +=, beforeend es la ubicacion del cambio
    lista.insertAdjacentHTML(`beforeend`, `
      <div class="article__div" id="produc${id}">
        <input type="checkbox" class="article__div-input" checked id="check${id}">
        <img src="./Fotos/${item.eleme.imagenes[1]}${id}.jpg" class="article__div-img" alt="">
        <div class="article__div-div">
          <div class="article__div-div-div">
            <ul class="article__div-div-dic-ul">
              <li class="article__div-div-div-ul-li">${item.eleme.principalDescripcion}${id}. es de ${item.eleme.material}</li>
            </ul>
          </div>
          <div class="article__div-div-div">
            <button class="article__div-div-div-button" id="eliminar${id}">Eliminar</button>
            <div class="article__div-div-div-div">
              <p class="article__div-div-div-div-p" id="precio${id}">$${item.eleme.precio * item.cant}</p>
              <button class="article__div-div-div-div-button1" id="buttonR${id}">-</button>
              <strong class="article__div-div-div-div-strong" id="cant${id}">${item.cant}</strong>
              <button class="article__div-div-div-div-button2" id="buttonS${id}">+</button>
            </div>
          </div>
        </div>
      </div>
    `);
    const check = document.getElementById(`check${id}`)
    const buton1 = document.getElementById(`buttonS${id}`)
    const buton2 = document.getElementById(`buttonR${id}`)
    const strong = document.getElementById(`cant${id}`)
    check.checked = item.che
    if (item.che == false) {
      buton1.classList.add("noHayMas")
      buton2.classList.add("noHayMas")
      strong.classList.add("noHayMas")
    }
    document.getElementById(`eliminar${id}`).addEventListener('click', () => eliminacionPorId(id));
    buton1.addEventListener('click', () => RandSPorId(id, `buttonS${id}`, `buttonR${id}`));
    buton2.addEventListener('click', () => RandSPorId(id, `buttonR${id}`, `buttonS${id}`));
    check.addEventListener('click', () => noContar(id));
  });

  actualizacionDeCompra();
}

function noContar(id) {
  console.log("llamado")
  const checkB = document.getElementById(`check${id}`)
  const buton1 = document.getElementById(`buttonR${id}`)
  const buton2 = document.getElementById(`buttonS${id}`)
  const strong = document.getElementById(`cant${id}`)
  carrito.forEach((item) => {
    let itemElegido = item.eleme.id
    if (itemElegido == id) {

      item.che = !item.che

      console.log(item.che)
      if (Boolean(item.che) === false) {
        buton1.classList.add("noHayMas")
        buton2.classList.add("noHayMas")
        strong.classList.add("noHayMas")
      }
      else {
        buton1.classList.remove("noHayMas")
        buton2.classList.remove("noHayMas")
        strong.classList.remove("noHayMas")
      }
    }
  })
  actualizacionDeCompra()
}

function eliminacionPorId(id) {
  console.log('a eliminar')
  const index = carrito.findIndex(item => item.eleme.id === id);
  if (index !== -1) {
    carrito.splice(index, 1);
    document.getElementById(`produc${id}`).remove();
    actualizacionDeCompra();
  }
}

function RandSPorId(id, botonId, contraBotonId) {
  const resultado = carrito.find(item => item.eleme.id === id);
  console.log(resultado)
  if (resultado.che === true) {
    const index = carrito.findIndex(item => item.eleme.id === id);
    if (index === -1) return;

    const item = carrito[index];
    const cantidad = document.getElementById(`cant${id}`);
    const contra = document.getElementById(contraBotonId);
    const boton = document.getElementById(botonId);
    const precio = document.getElementById(`precio${id}`);

    if (botonId === `buttonS${id}`) {
      if (Number(Number(item.cant) + 1) <= Number(item.eleme.stock)) {
        item.cant = Number(Number(item.cant) + 1);
        contra.classList.remove('noHayMas');
      }
      else {
        boton.classList.add('noHayMas');
      }
    }
    else {
      if (item.cant - 1 > 0) {
        item.cant -= 1;
        contra.classList.remove('noHayMas');
      }
      else {
        boton.classList.add('noHayMas');
      }
    }

    cantidad.innerText = item.cant;
    precio.innerText = `$${item.eleme.precio * item.cant}`;
    actualizacionDeCompra();
  }
}

function actualizacionDeCompra() {
  const cantiProduc = document.getElementById("cantProduc");
  const total = document.getElementById("total");
  let suma = 0;
  let cont = 0
  carrito.forEach((item) => {
    if (item.che == true) {
      cont++
    }
  })
  cantiProduc.innerText = `Productos (${cont})`;
  for (let item of carrito) {
    if (item.che == true) {
      suma += item.eleme.precio * item.cant;
    }
  }

  total.innerText = `$${suma}`;
}

function aComprar(element, cantidad) {
  const index = carrito.findIndex(item => item.eleme.id === element.id);

  if (index !== -1) {
    if ((Number(carrito[index].cant) + Number(cantidad)) <= element.stock) {
      carrito[index].cant = Number(carrito[index].cant) + Number(cantidad);
    }
  }
  else {
    const produc = {
      che: Boolean(true),
      eleme: element,
      cant: cantidad
    };
    carrito.push(produc);
  }

  console.log(carrito);
  actualizacionDeCompra();
}

function mostrarSearch() {
  const selectColor = document.getElementById("Color");
  const selectMarca = document.getElementById("Marca");
  const selectMaterial = document.getElementById("Material");
  const mayor = document.getElementById("mayor")
  const menor = document.getElementById("menor")

  menor.addEventListener("input", iniciarFiltrado)
  mayor.addEventListener("input", iniciarFiltrado)

  const filtros = [
    "Categorias", "Precio", "Color", "Peso",
    "Marca", "Tamaño", "Material"
  ];

  filtros.forEach(id => {
    const filtro = document.getElementById(id);
    if (filtro) {
      filtro.addEventListener("change", iniciarFiltrado);
    }
  });
  let coloresAgregados = new Set();
  let idIncremental = 1;
  Productos.forEach((element) => {
    if (Array.isArray(element.color)) {
      element.color.forEach((color) => {
        if (!coloresAgregados.has(color)) {
          coloresAgregados.add(color);

          const option = document.createElement("option");
          option.value = idIncremental++;
          option.textContent = color;

          selectColor.appendChild(option);
        }
      });
    }
  });

  let marcasAgregadas = new Set();
  let idMarca = 1;

  Productos.forEach((element) => {
    const marca = element.marca;

    if (!marcasAgregadas.has(marca)) {
      marcasAgregadas.add(marca);

      const option = document.createElement("option");
      option.value = idMarca++;
      option.textContent = marca;

      selectMarca.appendChild(option);
    }
  });

  let materialesAgregados = new Set();
  let idMaterial = 1;

  Productos.forEach((element) => {
    const material = element.material;

    if (!materialesAgregados.has(material)) {
      materialesAgregados.add(material);

      const option = document.createElement("option");
      option.value = idMaterial++;
      option.textContent = material;

      selectMaterial.appendChild(option);
    }
  });

}

function iniciarFiltrado() {
  const selectCategorias = document.getElementById("Categorias");
  const selectPrecio = document.getElementById("Precio");
  const selectColor = document.getElementById("Color");
  const selectPeso = document.getElementById("Peso");
  const selectMarca = document.getElementById("Marca");
  const selectTamaño = document.getElementById("Tamaño");
  const selectMaterial = document.getElementById("Material");
  const productosContainer = document.getElementById('section__div');
  const mayor = document.getElementById("mayor")
  const menor = document.getElementById("menor")

  let filtrados = Productos.filter((element) => {
    let pasa = true;

    const categoriaSeleccionada = selectCategorias.options[selectCategorias.selectedIndex].textContent;
    if (selectCategorias.value !== "0") {
      pasa = pasa && element.categorias.includes(categoriaSeleccionada);
    }

    const colorSeleccionado = selectColor.options[selectColor.selectedIndex].textContent;
    if (colorSeleccionado !== "Todos") {
      pasa = pasa && element.color.includes(colorSeleccionado);
    }

    const marcaSeleccionada = selectMarca.options[selectMarca.selectedIndex].textContent;
    if (selectMarca.value !== "0") {
      pasa = pasa && element.marca === marcaSeleccionada;
    }

    const materialSeleccionado = selectMaterial.options[selectMaterial.selectedIndex].textContent;
    if (selectMaterial.value !== "0") {
      pasa = pasa && element.material === materialSeleccionado;
    }

    return pasa;
  });

  if (selectPrecio.value === "1") {
    filtrados.sort((a, b) => a.precio - b.precio);
  }
  else if (selectPrecio.value === "2") {
    filtrados.sort((a, b) => b.precio - a.precio);
  }
  let idsFiltrados = filtrados.map(el => el.id);

  const ordenPeso = selectPeso.value;
  if (ordenPeso == "1") {
    // Ascendente
    const ordenados = [...Productos].sort((a, b) => a.peso[0] - b.peso[0]);
    idsFiltrados = ordenados.map(p => p.id);
  }
  else if (ordenPeso == "2") {
    // Descendente
    const ordenados = [...Productos].sort((a, b) => b.peso[0] - a.peso[0]);
    idsFiltrados = ordenados.map(p => p.id);
  }

  const opcionTamaño = Number(selectTamaño.value);
  if (opcionTamaño !== 0) {
    if (opcionTamaño === 1) {
      idsFiltrados.sort((a, b) => {
        const prodA = Productos.find(p => p.id === a);
        const prodB = Productos.find(p => p.id === b);
        return prodB.tamaño[1] - prodA.tamaño[1];
      });

    }
    else if (opcionTamaño === 2) {
      idsFiltrados.sort((a, b) => {
        const prodA = Productos.find(p => p.id === a);
        const prodB = Productos.find(p => p.id === b);
        return prodB.tamaño[2] - prodA.tamaño[2];
      });

    }
    else if (opcionTamaño === 3) {

      idsFiltrados.sort((a, b) => {
        const prodA = Productos.find(p => p.id === a);
        const prodB = Productos.find(p => p.id === b);
        return prodB.tamaño[3] - prodA.tamaño[3];
      });
    }
  }


  const precioMin = Number(menor.value) || 0;
  const precioMax = Number(mayor.value) || Infinity;
  idsFiltrados = idsFiltrados.filter(id => {
    const producto = Productos.find(p => p.id === id);
    return producto.precio >= precioMin && producto.precio <= precioMax;
  });

  productosContainer.innerHTML = '';
  idsFiltrados.forEach(idFiltrado => {
    const element = Productos.find(producto => producto.id === idFiltrado);
    if (element) {
      const div = document.createElement('div');
      div.classList.add('section__div-div');
      div.insertAdjacentHTML('beforeend', `
        <div class="section__div-div-div--fc">
          <img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" alt="Imagen del producto ${element.id}">
        </div>
        <div class="section__div-div-div">
          <h4>${element.nombre}</h4>
          <label>$${element.precio}</label>
          <p>${element.descripcion}</p>
        </div>`);

      div.addEventListener('click', () => {
        mostrarMain('Descripcion', mains);
        descripcionDeUnProducto(element);
      });

      productosContainer.appendChild(div);
    }
  });
}

const carousel = document.querySelector('.carousel')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

nextButton.onclick = () => {
  carousel.scrollBy({ left: 225, behavior: 'smooth' })
}

prevButton.onclick = () => {
  carousel.scrollBy({ left: -225, behavior: 'smooth' })
}

funcionalidadHeader()

document.addEventListener('DOMContentLoaded', () => {
  const inputBusqueda = document.querySelector('.header__nav-div-input')
  const contenedorResultados = document.getElementById('section__div')
  const botonProductos = document.getElementById('Produc')
  const botonProductosMobile = document.getElementById('Produc-mobile')

  botonProductosMobile.addEventListener('click', () => mostrarMain('Search', mains))
  botonProductos.addEventListener('click', () => mostrarMain('Search', mains))

  inputBusqueda.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      mostrarMain('Search', mains)
      const texto = e.target.value.trim().toLowerCase()
      if (texto.length === 0) {
        mostrarResultados(Productos)
        return
      }
      const resultados = Productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto) ||
        producto.descripcion.toLowerCase().includes(texto) ||
        producto.categorias.some(cat => cat.toLowerCase().includes(texto)) ||
        producto.marca.toLowerCase().includes(texto)
      )
      mostrarResultados(resultados)
    }
  })

  function mostrarResultados(resultados) {
    contenedorResultados.innerHTML = ''
    resultados.forEach(element => {
      const div = document.createElement('div')
      div.classList.add('section__div-div')
      div.innerHTML = `
        <div class="section__div-div-div--fc">
          <img src="./Fotos/${element.imagenes[0]}${element.id}.jpg" alt="Imagen del producto ${element.id}">
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
      contenedorResultados.appendChild(div)
    })
  }
})

const btnCate = document.getElementById('Cate');
const menu = document.getElementById('menuDesplegable');

// Alternar visibilidad
btnCate.addEventListener('click', () => {
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Ocultar si se hace clic fuera
document.addEventListener('click', function (e) {
  if (!btnCate.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
    console.log
  }
});

// Capturar la opción seleccionada (opcional)
document.querySelectorAll('#menuDesplegable li').forEach((item) => {
  item.addEventListener('click', () => {
    console.log(`Seleccionaste la categoría: ${item.textContent} con valor ${item.dataset.value}`);
    menu.style.display = 'none';
    const selectCategorias = document.getElementById("Categorias");
    selectCategorias.value = item.dataset.value
    mostrarMain('Search', mains)
    iniciarFiltrado(); // si tenés una función de filtrado
  });
});

// Función para crear y mostrar el cartel de notificaciones
function mostrarCartelNotificaciones(esMobile = false) {
  // Evitar duplicados
  if (document.getElementById('cartel-notificaciones')) return;

  const cartel = document.createElement('div');
  cartel.id = 'cartel-notificaciones';
  cartel.style.position = 'fixed';
  cartel.style.top = esMobile ? '80px' : '70px';
  cartel.style.right = esMobile ? '10%' : '40px';
  cartel.style.background = '#fff';
  cartel.style.border = '1px solid #003366';
  cartel.style.borderRadius = '10px';
  cartel.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
  cartel.style.padding = '20px 40px 20px 20px';
  cartel.style.zIndex = '2000';
  cartel.style.display = 'flex';
  cartel.style.alignItems = 'center';
  cartel.style.gap = '20px';
  cartel.style.fontSize = '1.2em';

  const texto = document.createElement('span');
  texto.textContent = 'No hay notificaciones';

  const botonCerrar = document.createElement('button');
  botonCerrar.textContent = '✖';
  botonCerrar.style.background = 'none';
  botonCerrar.style.border = 'none';
  botonCerrar.style.fontSize = '1.5em';
  botonCerrar.style.cursor = 'pointer';
  botonCerrar.style.color = '#003366';

  botonCerrar.onclick = () => cartel.remove();

  cartel.appendChild(texto);
  cartel.appendChild(botonCerrar);

  document.body.appendChild(cartel);
}

// Campana escritorio
const campana = document.querySelector('img[alt="notificaciones"].header__nav-div--login-img');
if (campana) {
  campana.addEventListener('click', () => mostrarCartelNotificaciones(false));
}

// Campana móvil
const campanaMobile = document.querySelector('.mobile-menu img[alt="notificaciones"]');
if (campanaMobile) {
  campanaMobile.addEventListener('click', (e) => {
    e.stopPropagation();
    mostrarCartelNotificaciones(true);
  });
}