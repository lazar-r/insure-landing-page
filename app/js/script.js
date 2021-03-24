const btnHamburger = document.querySelector('#btnHamburger')
const menu = document.querySelector('#menu')
btnHamburger.addEventListener('click', () => {
    console.log('clicked')
    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open')
    }
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }
    else {
        menu.classList.add('active')
    }
})