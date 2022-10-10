window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

let home = document.getElementById('home');
let pag2 = document.getElementById('pagina2');
let pag3 = document.getElementById('pagina3');
let pag4 = document.getElementById('pagina4');
let urlPage = window.location

let homeShow = () => {
    home.classList.remove('none')
    pag2.classList.add('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
    dataLayer.push({'paso': 'Consulta_de_ofertas', 'linea_elegida': urlPage.pathname })
}

let pag2Show = () => {
    home.classList.add('none')
    pag2.classList.remove('none')
    pag3.classList.add('none')
    pag4.classList.add('none')
    dataLayer.push({'paso': 'Validación_identidad', 'status': 200 })
}

let pag3Show = () => {
    home.classList.add('none')
    pag2.classList.add('none')
    pag3.classList.remove('none')
    pag4.classList.add('none')
    dataLayer.push({'paso': 'Otro evento de prueba', 'linea_elegida': urlPage.pathname })
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

