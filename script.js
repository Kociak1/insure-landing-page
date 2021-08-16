const opene = document.querySelector('#open')
const closee = document.querySelector('#close')
const menu = document.querySelector('#menu')


opene.addEventListener('click', () => {
     opene.classList.add('hiden')
    closee.classList.remove('hiden')
    menu.classList.remove('hiden')
})

closee.addEventListener('click', () => {
     closee.classList.add('hiden')
    opene.classList.remove('hiden')
    menu.classList.add('hiden')
})
