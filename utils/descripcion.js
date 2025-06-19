export function funcionalidadDeLaDescripcion () {
  const images = document.querySelectorAll('.objeto__article-div-div-img')

  images.forEach(img => {
    img.addEventListener('click', () => {
      images.forEach(i => i.classList.remove('selected'))
      img.classList.add('selected')
    })
  })

  const carousel = document.querySelector('.objeto__article-div-div')
  carousel.scrollBy({ left: 150, behavior: 'smooth' })

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
}
