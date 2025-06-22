import { mains, mostrarMain } from "./Main.js"

export function funcionalidadHeader() {
  document.addEventListener('DOMContentLoaded', () => {
    const closeMenu = document.querySelector('.close-menu')
    const hamburguerMenu = document.querySelector('.hamburger-menu')

    closeMenu.addEventListener('click', () => toggleMenu())
    hamburguerMenu.addEventListener('click', () => toggleMenu())

    function toggleMenu() {
      const mobileMenu = document.querySelector('.mobile-menu')
      mobileMenu.classList.toggle('open')
    }
  })

  const carrito = document.getElementById('carritoMobile')
  const imagenheader = document.getElementById('imagen__header')

  carrito.addEventListener('click', () => mostrarMain('Carrito', mains))
  imagenheader.addEventListener('click', () => mostrarMain('Home', mains))
}
