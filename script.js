/* formularuio */

const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let dados = {
    nome,
    email
  }
  let convertDados = JSON.stringify(dados)

  localStorage.setItem('lead', convertDados)

  let content = document.getElementById('content')

  let finalizado = '<h1 class="title2">Cadastro realizado com sucesso!</h1>'

  content.innerHTML = finalizado
})

/* abre e fecha o menu quando clicar ni icone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    /* scroll é maior que a autura do headre */
    header.classList.add('scroll')
  } else {
    /* scroll menor que a altura do header */
    header.classList.remove('scroll')
  }
}

/* scrollreveal: mostrar elementos quando der reveal na pagina*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about .text,#products header, #products .card, footer .brand, footer .social',
  {
    interval: 100
  }
)

/* menu ativo conforme a seção visivel na pagina */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* when scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  activateMenuAtCurrentSection()
})
