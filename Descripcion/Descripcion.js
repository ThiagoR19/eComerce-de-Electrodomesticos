const button1 = document.getElementById('Cate');
        const image1 = document.getElementById('buttonImg1');
        const button2 = document.getElementById('Produc');
        const image2 = document.getElementById('buttonImg2');
        const images = document.querySelectorAll('.objeto__article-div-div-img');
        const arrow = document.getElementById('arrow');
        const imageDown = 'img/expandir.png';
        const imageUp = 'img/contraer.png';

        let Vuelta1 = false;
        let Vuelta2 = false;
        button1.addEventListener('click', () => {
            Vuelta1 = !Vuelta1;
            image1.src = Vuelta1 ? imageUp : imageDown;
        });
        button2.addEventListener('click', () => {
            Vuelta2 = !Vuelta2;
            image2.src = Vuelta2 ? imageUp : imageDown;
        });
        arrow.addEventListener('mousedown', () => {
        arrow.style.backgroundColor = '#F1F3F5'; 
    });

    arrow.addEventListener('mouseup', () => {
        arrow.style.backgroundColor = '#003366'; 
    });

    arrow.addEventListener('mouseleave', () => {
        arrow.style.backgroundColor = '#003366'; 
    });

    images.forEach(img => {
      img.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('selected'));
        img.classList.add('selected');
      });
    });

    function scrollCarousel() {
      const container = document.getElementById('carousel');
      container.scrollBy({ left: 150, behavior: 'smooth' });
    }
        const btn = document.getElementById("next-btn");
    const container = document.getElementById("product-container");

    btn.addEventListener("mousedown", () => {
      btn.style.backgroundColor = "#FFFFFF";
    });

    btn.addEventListener("mouseup", () => {
      btn.style.backgroundColor = "#005b96";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "#005b96";
    });

    btn.addEventListener("click", () => {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    const slider = document.getElementById('slider');
    const cuotasElegidas = document.getElementById('cuotasElegidas');

    slider.addEventListener('input', () => {
        cuotasElegidas.textContent = slider.value;
    });
  const button = document.getElementById('dropdown-button');
  const menu = document.getElementById('dropdown-menu');
  const arrow2 = document.getElementById('dropdown-arrow');
  const title = button.querySelector('h2');

  button.addEventListener('click', () => {
    menu.classList.toggle('active');
    arrow2.style.transform = menu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    button.style.borderRadius = menu.classList.contains('active') ? '8px 8px 0 0' : '8px';
  });

  document.querySelectorAll('.main-aside--stock--option').forEach(option => {
    option.addEventListener('click', () => {
      const value = option.getAttribute('data-value');
      if (value === 'stock') {
        title.textContent = 'Comprar todo...';
      } else {
        title.textContent = `Comprar ${value}`;
      }
      menu.classList.remove('active');
      arrow2.style.transform = 'rotate(0deg)';
      button.style.borderRadius = '8px';
    });
  });

  window.addEventListener('click', e => {
    if (!document.querySelector('.comprar').contains(e.target)) {
      menu.classList.remove('active');
      arrow2.style.transform = 'rotate(0deg)';
      button.style.borderRadius = '8px';
    }
  });gggggggg