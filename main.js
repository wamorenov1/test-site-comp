window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

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
        page_title: '1. Inicio Solicitud de crédrito',
        page_location: '/inicio', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
        fbq('trackCustom', '1. Solicitud Credito', {page:'/inicio', title:'Inicio Solicitud de crédrito'});
}

let pag2Show = () => {
    home.classList.add('none')
    pag2.classList.remove('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
    gtag('event', 'page_view', {
        page_title: 'Datos personales',
        page_location: '/datos-personales', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
        fbq('trackCustom', '2. Datos Personales', {page:'/home', title:'Datos personales'});
}

let pag3Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.remove('none')
    pag4.classList.add('none')
    gtag('event', 'page_view', {
        page_title: 'Confirmación de radicación',
        page_location: '/confirmacion', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
        fbq('trackCustom', '3. Confirmación Radicación', {page:'/confirmacion', title:'Confirmación de radicación'});    
}
let pag4Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.add('none')
    pag4.classList.remove('none')
    gtag('event', 'page_view', {
        page_title: 'Termina el proceso',
        page_location: '/gracias', // Include the full URL
        send_to: 'G-FRYC17EHQZ'
        });
        fbq('trackCustom', '4. Termina el proceso', {page:'/gracias', title:'Termina el proceso'});
}

let endProcess = () => {
    homeShow()
}

    homeShow()

