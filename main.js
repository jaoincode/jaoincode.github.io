// Cards description
let description = document.querySelector('.cards-description');

document.addEventListener('click', e => {
  const target = e.target
  cardOver(target);
});

document.addEventListener('mouseover', e => {
  const target = e.target
  cardOver(target);
});

function cardOver(element) {
  if(element.classList.contains('javascript')) return description.textContent = "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.";

  if(element.classList.contains('html')) return description.textContent = "o HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos.";

  if(element.classList.contains('css')) return description.textContent = "CSS é utilizado na estilização de componentes escritos em linguagens de marcação.";
}

// Smooth Scroll
$('.navigation a').on('click', function(e) {
  if(this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
    {
      scrollTop: $(hash).offset().top - 100,
    }, 
    500
    );
  }
});

// Theme
const darkButton = document.querySelector('.dark-btn');

darkButton.addEventListener('click', () => {
  if(darkButton.classList.contains('dark')) {
    lightMode(darkButton);
    return;
  };
  if(darkButton.classList.contains('light')) {
    darkMode(darkButton);
    return;
  };
})

function lightMode(btn) {
  document.body.style.cssText = '--primary-color: #000; --secondary-color: rgb(111, 0, 255); --third-color: rgb(111, 0, 255); --background: #FAFAFA';
  btn.classList.remove('dark');
  btn.classList.add('light');
}

function darkMode(btn) {
  document.body.style.cssText = '--primary-color: #fff; --secondary-color: rgb(111, 0, 255); --third-color: rgb(219, 192, 255); --background: #151515;';
  btn.classList.remove('light')
  btn.classList.add('dark');
}

