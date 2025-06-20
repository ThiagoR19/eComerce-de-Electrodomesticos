export function funcionalidadHeader () {
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
}
