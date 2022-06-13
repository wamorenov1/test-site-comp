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
        page_title: 'Inicio Solicitud de crédrito',
        page_location: 'https://test-site-comp.vercel.app/home', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
}

let pag2Show = () => {
    home.classList.add('none')
    pag2.classList.remove('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
    gtag('event', 'page_view', {
        page_title: 'Datos personales',
        page_location: 'https://test-site-comp.vercel.app/pagina2', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
}

let pag3Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.remove('none')
    pag4.classList.add('none')
    gtag('event', 'page_view', {
        page_title: 'Confirmación de radicación',
        page_location: 'https://test-site-comp.vercel.app/pagina3', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
}
let pag4Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.add('none')
    pag4.classList.remove('none')
    gtag('event', 'page_view', {
        page_title: 'Termina el proceso',
        page_location: 'https://test-site-comp.vercel.app/pagina4', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
}

let endProcess = () => {
    homeShow()
}

homeShow()

