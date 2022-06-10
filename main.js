let home = document.getElementById('home');
let pag2 = document.getElementById('pagina2');
let pag3 = document.getElementById('pagina3');
let pag4 = document.getElementById('pagina4');

let homeShow = () => {
    home.classList.remove('none')
    pag2.classList.add('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
    gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: "/home",
        page_path: window.location.pathname,
        send_to: 'G-H9CCTPLF12'
    });
}

let pag2Show = () => {
    home.classList.add('none')
    pag2.classList.remove('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
}

let pag3Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.remove('none')
    pag4.classList.add('none')
}
let pag4Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.add('none')
    pag4.classList.remove('none')
}

let endProcess = () => {
    homeShow()
}

homeShow()

