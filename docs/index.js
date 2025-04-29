let menuList = document.getElementById('menulist')
let menuLinks = document.querySelectorAll('#menulist a')
menuList.style.maxHeight = '0px'

function toggleMenu() {
    if (menuList.style.maxHeight == '0px') {
        menuList.style.maxHeight = '300px'
    }
    else {
        menuList.style.maxHeight = '0px'
    }
}

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuList.style.maxHeight = '0px'
    })
  })