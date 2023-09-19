const navMenu= documentById('nav-menu'),
      toggleMenu=document.getElementById('toggle-menu'),
      closeMenu=document.getElementById('close-menu')
toggleMenu.addEventListener('click',(){
    navMenu.classlist.toggle('show')
})