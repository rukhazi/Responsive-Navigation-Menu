const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('navtoggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const navLink = document.querySelectorAll('.navlinks')

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}